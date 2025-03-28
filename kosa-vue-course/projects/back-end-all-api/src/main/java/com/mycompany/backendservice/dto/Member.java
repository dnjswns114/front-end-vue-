package com.mycompany.backendservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class Member {
	@NotBlank(message = "mid는 필수 입력 정보입니다.")
	private String mid;
	
	@NotBlank(message = "mname는 필수 입력 정보입니다.")
	private String mname;
	
	@NotBlank(message = "mpassword는 필수 입력 정보입니다.")
	//@Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$", message = "mpassword가 유효하지 않습니다.")
	private String mpassword;
	
	@NotBlank(message = "memail은 필수 입력 정보입니다.")
	//@Pattern(regexp = "^\\w+@\\w+\\.\\w+(\\.\\w+)?$", message = "memail이 유효하지 않습니다.")
	private String memail;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private boolean menabled;
	
	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private String mrole;	
}
