package com.mycompany.backendservice.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class Login {
	@NotBlank(message = "mid는 필수 입력 정보입니다.")
	private String mid;
	
	@NotBlank(message = "mpassword는 필수 입력 정보입니다.")
	private String mpassword;
}
