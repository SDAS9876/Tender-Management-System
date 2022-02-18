package com.spring.jdbc.model;

public class Contractor {
	private boolean admin=false;
	private String firstName;
	private String lastName;
	private String dob;
	private String gender;
	private int contactNumber;
	private String category;
	private int userId;
	private String password;
	
	public Contractor(String firstName, String lastName, String dob, String gender, int contactNumber, String category,
			int userId, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.gender = gender;
		this.contactNumber = contactNumber;
		this.category = category;
		this.userId = userId;
		this.password = password;
	}
	
	
	public boolean isAdmin() {
		return admin;
	}
	
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}


	public Contractor() {}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	@Override
	public String toString() {
		return "Contractor [firstName=" + firstName + ", lastName=" + lastName + ", dob=" + dob + ", gender=" + gender
				+ ", contactNumber=" + contactNumber + ", category=" + category + ", userId=" + userId + ", password="
				+ password + "]";
	}


	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
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
