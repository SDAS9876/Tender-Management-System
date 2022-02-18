package com.spring.jdbc.model;

public class Admin {
	private int userId;
	private String password;
	
	
	
	public Admin(int userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
