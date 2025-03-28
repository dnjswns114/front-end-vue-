package com.mycompany.backendservice.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mycompany.backendservice.dto.Board;
import com.mycompany.backendservice.dto.Pager;
import com.mycompany.backendservice.service.BoardService;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@GetMapping("/list")
	public Map<String, Object> list(@RequestParam(value="pageNo", defaultValue = "1") int pageNo) {
		//페이징 대상이 되는 전체 행수 얻기
		int totalRows = boardService.getCount();
		//페이저 객체 생성
		Pager pager = new Pager(5, 5, totalRows, pageNo);
		//해당 페이지의 게시물 목록 가져오기
		List<Board> list = boardService.getList(pager);
		//여러 객체를 리턴하기 위해 Map 객체 생성
		Map<String, Object> map = new HashMap<>();
		map.put("boards", list);
		map.put("pager", pager);
		return map; //{ "boards": [...], "pager": {...} }
	}
	
	//@Secured("ROLE_USER")은 2.7과 3.x에서 동작하지 않음
	@PreAuthorize("hasAuthority('ROLE_USER')")
	@PostMapping("/create")
	public Board create(Board board, Authentication authentication) {
		//첨부가 넘어왔을 경우 처리
		if(board.getBattach() != null && !board.getBattach().isEmpty()) {
			MultipartFile mf = board.getBattach();
			//파일 이름을 설정
			board.setBattachoname(mf.getOriginalFilename());
			//파일 종류를 설정
			board.setBattachtype(mf.getContentType());
			try {
				//파일 데이터를 설정
				board.setBattachdata(mf.getBytes());
			} catch (IOException e) {
			}
		}
		//DB에 저장
		board.setBwriter(authentication.getName());
		boardService.insert(board);

		//응답 생성
		board = boardService.getBoard(board.getBno());
		return board;
	}
	
    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping("/read/{bno}") //http://localhost/read/5
    public Board read(@PathVariable("bno") int bno, @RequestParam(value="caller", defaultValue="") String caller) {
        //목록에서 제목을 클릭했을 때만 조회수 증가
        if(caller.equals("list")) {
            boardService.addHitcount(bno);
        }
        //bno에 해당하는 Board 객체 얻기
        Board board = boardService.getBoard(bno);
        return board;
    }
	
	@PreAuthorize("hasAuthority('ROLE_USER')")
	@PutMapping("/update")
	public Board update(Board board) {
		//첨부가 넘어왔을 경우 처리
		if(board.getBattach() != null && !board.getBattach().isEmpty()) {
			MultipartFile mf = board.getBattach();
			//파일 이름을 설정
			board.setBattachoname(mf.getOriginalFilename());
			//파일 종류를 설정
			board.setBattachtype(mf.getContentType());
			try {
				//파일 데이터를 설정
				board.setBattachdata(mf.getBytes());
			} catch (IOException e) {
			}
		}
		//수정하기
		boardService.update(board);
		//수정된 내용의 Board 객체 얻기
		board = boardService.getBoard(board.getBno());
		return board;
	}
	
	@PreAuthorize("hasAuthority('ROLE_USER')")
	@DeleteMapping("/delete/{bno}")
	public void delete(@PathVariable("bno") int bno) {
		boardService.delete(bno);
	}
	
	@PreAuthorize("hasAuthority('ROLE_USER')")
	@GetMapping("/battach/{bno}")
	public void download(@PathVariable("bno") int bno, HttpServletResponse response) {
		//해당 게시물 가져오기
		Board board = boardService.getBoard(bno);
		try {
			//파일 이름이 한글일 경우, 브라우저에서 한글 이름으로 다운로드 받기 위해 헤더에 추가할 내용
			String fileName = new String(board.getBattachoname().getBytes("UTF-8"), "ISO-8859-1");
			response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
			//파일 타입을 헤더에 추가
			response.setContentType(board.getBattachtype());
			//응답 바디에 파일 데이터를 출력
			OutputStream os = response.getOutputStream();
			os.write(board.getBattachdata());
			os.flush();
			os.close();
		} catch (IOException e) {
			log.error(e.toString());
		}		
	}
}








