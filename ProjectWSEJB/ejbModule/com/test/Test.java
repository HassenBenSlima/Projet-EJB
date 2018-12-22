package com.test;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {

	public static void main(String[] args) throws ParseException {

		DateFormat formatter = null;
		Date convertedDate = null;

		// String to Date conversion in Java with dd-MM-yyyy format e.g. "14-09-2011"
		String dd_MM_YY = "14-09-2011";
		formatter = new SimpleDateFormat("dd-MM-yyyy");
		convertedDate = (Date) formatter.parse(dd_MM_YY);
		System.out.println("Date from dd-MM-yyyy String in Java : " + convertedDate);

	}
}
