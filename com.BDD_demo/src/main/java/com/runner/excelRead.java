package com.runner;

import java.io.FileInputStream;

import java.io.IOException;

import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;


public class excelRead {

	
	public static void main(String[] args) throws BiffException, IOException  {
		
		String path=".\\dataFiles\\ram.xls";
		FileInputStream fis = new FileInputStream(path);
	Workbook wb = Workbook.getWorkbook(fis);
	
	Sheet st= wb.getSheet(0);
	
	 int rows =st.getRows();
	 int col= st.getColumns();
	 for(int i=0; i<rows; i++) {
		 for(int j=0; j<col; j++) {
			 System.out.print(st.getCell(j, i).getContents()+ "\t");
		 }
		System.out.println(); 
	 }
	
	}
}