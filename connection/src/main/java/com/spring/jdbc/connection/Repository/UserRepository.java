package com.spring.jdbc.connection.Repository;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.spring.jdbc.model.Admin;
import com.spring.jdbc.model.Contractor;

@Repository
public class UserRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<String> getAllUserName() {
		List<String> user = new ArrayList<>();
		user.addAll(jdbcTemplate.queryForList("Select password from admin", String.class));
		System.out.println(user);
		return user;
	}
	
	public List<Contractor> getAllUser() {
		List<Contractor> obj = jdbcTemplate.query("Select * from contractor", new BeanPropertyRowMapper(Contractor.class));
		return obj;
	}

	public boolean verifyAdmin(int id, String password) {
		try {
			int userId = jdbcTemplate.queryForObject("Select userId from admin where userId =" + id, Integer.class);
			String pass = jdbcTemplate.queryForObject("Select password from admin where userId= " + userId,
					String.class);
			if (password.equals(pass)) {
				System.out.println("password matches");
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();

		}
		return false;

	}
	public boolean verifyAdmin(Admin admin) {
		try {
			int userId = jdbcTemplate.queryForObject("Select userId from admin where userId =" + admin.getUserId(), Integer.class);
			String pass = jdbcTemplate.queryForObject("Select password from admin where userId= " + userId,
					String.class);
			if (pass.equals(admin.getPassword())) {
				System.out.println("password matches");
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();

		}
		return false;

	}
	
	public Contractor register(Contractor contractor) {
//		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
		Date date;
		java.sql.Date sqlDate = null;
//		try {
//			date = sdf.parse(contractor.getDob());
//			sqlDate = new java.sql.Date(date.getTime());
//		} catch (ParseException e) {
//
//			e.printStackTrace();
//		}
		
		String sql = "insert into contractor values (" + contractor.isAdmin() + ","
										+ "\"" +		 contractor.getFirstName() + "\"," 
										+ "\"" + contractor.getLastName() + "\"," 
										+ "\"" + contractor.getDob()  + "\","
										
										+  "\"" + contractor.getGender()+  "\" ,"
										+ "\"" + contractor.getContactNumber()+  "\" ,"
										+ "\"" + contractor.getCategory()+  " \","
										+ "\"" + contractor.getUserId()+  "\","
										+ "\"" + contractor.getPassword()+ "\" );"; 
		System.out.println(contractor);
		try {
			jdbcTemplate.update(sql);
			return contractor;
		}
		catch(Exception e) {
			e.printStackTrace();
			
		}
		return contractor;										
	}
}
