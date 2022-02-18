package com.spring.jdbc.connection.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.jdbc.connection.Repository.UserRepository;
import com.spring.jdbc.model.Contractor;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path="/user")
public class Controller {
	@Autowired
	UserRepository repository;
	
	@GetMapping("/")
	public ResponseEntity<List <Contractor>> getAllUser() {
		return new ResponseEntity(repository.getAllUser(), HttpStatus.OK);
		
	}
	
	@GetMapping("/getuser")
	public List<String> getAllUserName(){
		return repository.getAllUserName();
	}
	
	@GetMapping("/verifyAdmin")
	public boolean verifyAdmin() {
		return repository.verifyAdmin(1001, "laser");
	}
	
	@PostMapping("/register")
	public ResponseEntity<Contractor> register(@RequestBody Contractor contractor) {
		return new ResponseEntity<>(repository.register(contractor), HttpStatus.OK);	
	}
	
//	Contractor contractor = new Contractor("laser", "xyz", "20/02/2020","M",1234567890,"categorya", 9002, "password");
//	@GetMapping("/register")
//	public String register() {
//		return repository.register(contractor);
//	}
}
