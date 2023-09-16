package com.techcareerfullstack.erkalalpay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class},
		               scanBasePackages={"com.techcareerfullstack.erkalalpay.Repository"})


public class ErkalalpayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ErkalalpayApplication.class, args);
	}

}
