package com.mycompany.backendservice.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Board {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private int bno;

	private String btitle;
	
	private String bcontent;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private String bwriter;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private Date bdate;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private int bhitcount;

	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) //Request(o), Response(x)
	private MultipartFile battach;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private String battachoname;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private String battachsname;

	@JsonProperty(access = JsonProperty.Access.READ_ONLY) //Request(x), Response(o)
	private String battachtype;

	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) //Request(o), Response(x)
	private byte[] battachdata;
}
