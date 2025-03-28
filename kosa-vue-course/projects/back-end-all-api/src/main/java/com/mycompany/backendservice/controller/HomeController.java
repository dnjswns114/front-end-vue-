package com.mycompany.backendservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class HomeController {
	@GetMapping("/")
	public String getGreeting() {
		log.info("실행");
		return "환영합니다!";
	}
}
