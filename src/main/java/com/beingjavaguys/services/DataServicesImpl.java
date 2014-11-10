package com.beingjavaguys.services;

import com.beingjavaguys.amazon.*;
import com.beingjavaguys.dao.DataDao;
import com.beingjavaguys.model.*;
import com.beingjavaguys.vo.Product;
import org.apache.commons.lang.StringUtils;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.*;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopScoreDocCollector;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.RAMDirectory;
import org.apache.lucene.util.Version;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.math.BigInteger;
import java.util.*;

public class DataServicesImpl implements DataServices {

	@Autowired
	DataDao dataDao;

	@Override
	public boolean addEntity(Employee employee) throws Exception {
		return dataDao.addEntity(employee);
	}

	@Override
	public Employee getEntityById(long id) throws Exception {
		return dataDao.getEntityById(id);
	}

	@Override
	public List<Employee> getEntityList() throws Exception {
		return dataDao.getEntityList();
	}

	@Override
	public boolean deleteEntity(long id) throws Exception {
		return dataDao.deleteEntity(id);
	}

    @Override
    public PUser checkUser(String email, String password) throws Exception{
        return dataDao.checkUser(email, password);
    }

    @Override
    public boolean addPMobileEntity(PMobile pMobile) throws Exception{
        return dataDao.addPMobileEntity(pMobile);
    }

    @Override
    public boolean addPWatchEntity(PWatch pWatch) throws Exception{
        return dataDao.addPWatchEntity(pWatch);
    }

    @Override
    public boolean addPLaptopEntity(PLaptop pLaptop) throws Exception{
        return dataDao.addPLaptopEntity(pLaptop);
    }

    @Override
    public boolean addPTelevisionEntity(PTelevision pTelevision) throws Exception{
        return dataDao.addPTelevisionEntity(pTelevision);
    }
    @Override
    public boolean addUser(PUser pUser) throws Exception {
        return dataDao.addUser(pUser);
    }


    @Override
    public boolean addPCameraEntity(PCamera pCamera) throws Exception{
        return dataDao.addPCameraEntity(pCamera);
    }

    @Override
    public boolean addPTshirtEntity(PTshirt pTshirt) throws Exception{
        return dataDao.addPTshirtEntity(pTshirt);
    }

    @Override
    public List<PMobile> getAllMobileList() throws Exception {
        return dataDao.getAllMobileList();
    }

    @Override
    public List<PMobile> getAllMobileBrandList() throws Exception{
        return dataDao.getAllMobileBrandList();
    }

    @Override
    public boolean addPShoesEntity(PShoes pShoes) throws Exception{
        return dataDao.addPShoesEntity(pShoes);
    }

    @Override
    public boolean addPWomenClothingEntity(PWomenClothing pWomenClothing) throws Exception{
        return dataDao.addPWomenClothingEntity(pWomenClothing);
    }

    @Override
    public boolean addPMenClothingEntity(PMenClothing pMenClothing) throws Exception{
        return dataDao.addPMenClothingEntity(pMenClothing);
    }


    @Override
    public boolean addPElectronicsEntity(PElectronics pElectronics) throws Exception{
        return dataDao.addPElectronicsEntity(pElectronics);
    }


    @Override
    public List<PWatch> getAllWatchBrandList() throws Exception{
        return dataDao.getAllWatchBrandList();
    }

    @Override
    public List<PWatch> getAllWatchList() throws Exception {
        return dataDao.getAllWatchList();
    }

    @Override
    public List<PLaptop> getAllLaptopBrandList() throws Exception{
        return dataDao.getAllLaptopBrandList();
    }

    @Override
    public List<PLaptop> getAllLaptopList() throws Exception {
        return dataDao.getAllLaptopList();
    }

    @Override
    public List<PTelevision> getAllTelevisionBrandList() throws Exception{
        return dataDao.getAllTelevisionBrandList();
    }

    @Override
    public List<Product> getAllProductBrandList(String productType) throws Exception{
        return dataDao.getAllProductBrandList(productType);
    }

    @Override
    public List<Product> getAllProductList(String productType) throws Exception{
        return dataDao.getAllProductList(productType);
    }

    @Override
    public List<PTelevision> getAllTelevisionList() throws Exception {
        return dataDao.getAllTelevisionList();
    }

    @Override
    public Set<String> getAllWomenBrandList(String category) throws Exception{
        return dataDao.getAllWomenBrandList(category);
    }

    @Override
    public Set<String> getAllWomenColorList(String category) throws Exception{
        return dataDao.getAllWomenColorList(category);
    }

    @Override
    public List<PWomenClothing> getWomenClothingForCatList(String category) throws Exception{
        return dataDao.getWomenClothingForCatList(category);
    }

    @Override
    public List<PWomenClothing> getAllWomenSelectClothingList(String brand, String color, int maxPrice, int minPrice, String categoryItem, String order) throws Exception{
        return dataDao.getAllWomenSelectClothingList(brand, color,  maxPrice,  minPrice, categoryItem, order);
    }

    @Override
    public List<PMenClothing> getAllMenSelectClothingList(String brand, String color, int maxPrice, int minPrice, String categoryItem, String order) throws Exception{
        return dataDao.getAllMenSelectClothingList(brand, color,  maxPrice,  minPrice, categoryItem, order);
    }




    @Override
    public Set<String> getAllElectronicsBrandList(String category) throws Exception{
        return dataDao.getAllElectronicsBrandList(category);
    }

    @Override
    public Set<String> getAllElectronicsColorList(String category) throws Exception{
        return dataDao.getAllElectronicsColorList(category);
    }

    @Override
    public List<PElectronics> getElectronicsForCatList(String category) throws Exception{
        return dataDao.getElectronicsForCatList(category);
    }

    @Override
    public List<PElectronics> getAllElectronicsList(String brand, String color, int maxPrice, int minPrice, String categoryItem, String order) throws Exception{
        return dataDao.getAllElectronicsList(brand, color,  maxPrice,  minPrice, categoryItem, order);
    }

    @Override
    public Set<String> getAllMobileBrandList(String category) throws Exception{
        return dataDao.getAllMobileBrandList(category);
    }

    @Override
    public Set<String> getAllMobileColorList(String category) throws Exception{
        return dataDao.getAllMobileColorList(category);
    }

    @Override
    public List<PMobile> getMobileForCatList(String category) throws Exception{
        return dataDao.getMobileForCatList(category);
    }

    @Override
    public List<PMobile> getAllMobileList(String brand, String color, int maxPrice, int minPrice, String categoryItem, String order) throws Exception{
        return dataDao.getAllMobileList(brand, color,  maxPrice,  minPrice, categoryItem, order);
    }


    @Override
    public Set<String> getAllWatchBrandList(String category) throws Exception{
        return dataDao.getAllWatchBrandList(category);
    }

    @Override
    public Set<String> getAllWatchColorList(String category) throws Exception{
        return dataDao.getAllWatchColorList(category);
    }

    @Override
    public List<PWatch> getWatchForCatList(String category) throws Exception{
        return dataDao.getWatchForCatList(category);
    }

    @Override
    public List<PWatch> getAllWatchList(String brand, String color, int maxPrice, int minPrice, String categoryItem, String order) throws Exception{
        return dataDao.getAllWatchList(brand, color,  maxPrice,  minPrice, categoryItem, order);
    }



    @Override
    public Set<String> getAllMenBrandList(String category) throws Exception{
        return dataDao.getAllMenBrandList(category);
    }

    @Override
    public Set<String> getAllMenColorList(String category) throws Exception{
        return dataDao.getAllMenColorList(category);
    }

    @Override
    public List<PMenClothing> getMenClothingForCatList(String category) throws Exception{
        return dataDao.getMenClothingForCatList(category);
    }

    @Override
    public List<PMobile> getQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception {
        List<PMobile> productList = dataDao.getAllMobileList();

        List<PMobile> productList1 = new ArrayList<PMobile>();

        double maxPrice = 0;
        double minPrice = 0;


        for (int j11 = 0; j11 < price.length(); j11++) {
            String priceAmount = price.getJSONObject(j11).getString("price");
            if (priceAmount.equalsIgnoreCase("Rs. 2000 and below")) {
                maxPrice = 2000;
                minPrice = 1;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 5001 - 10000")) {
                maxPrice = 10000;
                minPrice = 5001;
            } else if (priceAmount.equalsIgnoreCase("Rs 10001 - 18000")) {
                maxPrice = 18000;
                minPrice = 10001;
            } else if (priceAmount.equalsIgnoreCase("Rs 18001 - 25000")) {
                maxPrice = 25000;
                minPrice = 18001;
            } else if (priceAmount.equalsIgnoreCase("Rs 25001 - 35000")) {
                maxPrice = 35000;
                minPrice = 25001;
            } else if (priceAmount.equalsIgnoreCase("Rs 35001 and above")) {
                maxPrice = 200000;
                minPrice = 35001;
            }
        }


        int filter = 0;
        if (key.length() > 0 && color.length() > 0 && price.length() > 0) {
            //filter brand, color and price
            filter = 1;
        } else if (key.length() > 0 && color.length() > 0 && price.length() <= 0) {
            //filter brand, color
            filter = 2;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() <= 0) {
            //filter brand
            filter = 3;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() > 0) {
            //filter color and price
            filter = 4;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() <= 0) {
            //filter color
            filter = 5;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() <= 0) {
            //filter no
            filter = 6;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() > 0) {
            //filter price
            filter = 7;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() > 0) {
            //filter brand and price
            filter = 8;
        }


        switch (filter) {
            case 1:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PMobile pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        for (int j11 = 0; j11 < price.length(); j11++) {
                                            //String priceAmount = price.getJSONObject(j11).getString("price");
                                            double salePrice = Double.valueOf(pro.getSalePrice());
                                            //  System.out.println("salePrice : " + salePrice);
                                            // System.out.println("minPrice : " + minPrice);
                                            //  System.out.println("maxPrice : " + maxPrice);
                                            if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                                // System.out.println("salePrice inside : " + salePrice);
                                                productList1.add(pro);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PMobile pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 3:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PMobile pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand()) || pro.getProductName().contains(brandName)) {
                            productList1.add(pro);
                        }
                    }
                }
                break;
            case 4:
                for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PMobile pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                // System.out.println("keep in list - " + pro.getProductName());
                                for (int j11 = 0; j11 < price.length(); j11++) {
                                    String priceAmount = price.getJSONObject(j11).getString("price");
                                    double salePrice = Double.valueOf(pro.getSalePrice());
                                    if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                        //  System.out.println("salePrice inside : " + salePrice);
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }

                }
                break;
            case 5:
                for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PMobile pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                productList1.add(pro);
                            }
                        }
                    }

                }
                break;
            case 6:

                break;
            case 7:
                for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PMobile pro = productIterator.next();
                    for (int j11 = 0; j11 < price.length(); j11++) {
                        String priceAmount = price.getJSONObject(j11).getString("price");
                        double salePrice = Double.valueOf(pro.getSalePrice());
                        if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                            //  System.out.println("salePrice inside : " + salePrice);
                            productList1.add(pro);
                        }
                    }
                }

                break;
            case 8:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PMobile> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PMobile pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {

                            for (int j11 = 0; j11 < price.length(); j11++) {
                                //String priceAmount = price.getJSONObject(j11).getString("price");
                                double salePrice = Double.valueOf(pro.getSalePrice());
                                //  System.out.println("salePrice : " + salePrice);
                                //  System.out.println("minPrice : " + minPrice);
                                //  System.out.println("maxPrice : " + maxPrice);
                                if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                    //  System.out.println("salePrice inside : " + salePrice);
                                    productList1.add(pro);
                                }
                            }

                        }
                    }

                }
                break;
            default:
                break;

        }

        if (key.length() == 0 && price.length() == 0 && color.length() == 0) {
            return productList;
        }

        return productList1;
    }

    @Override
    public List<PWatch> getWatchQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception {
        List<PWatch> productList = dataDao.getAllWatchList();

        List<PWatch> productList1 = new ArrayList<PWatch>();

        double maxPrice = 0;
        double minPrice = 0;


        for (int j11 = 0; j11 < price.length(); j11++) {
            String priceAmount = price.getJSONObject(j11).getString("price");
            if (priceAmount.equalsIgnoreCase("Rs. 2000 and below")) {
                maxPrice = 2000;
                minPrice = 1;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 5001 - 10000")) {
                maxPrice = 10000;
                minPrice = 5001;
            } else if (priceAmount.equalsIgnoreCase("Rs 10001 - 18000")) {
                maxPrice = 18000;
                minPrice = 10001;
            } else if (priceAmount.equalsIgnoreCase("Rs 18001 - 25000")) {
                maxPrice = 25000;
                minPrice = 18001;
            } else if (priceAmount.equalsIgnoreCase("Rs 25001 - 35000")) {
                maxPrice = 35000;
                minPrice = 25001;
            } else if (priceAmount.equalsIgnoreCase("Rs 35001 and above")) {
                maxPrice = 200000;
                minPrice = 35001;
            }
        }


        int filter = 0;
        if (key.length() > 0 && color.length() > 0 && price.length() > 0) {
            //filter brand, color and price
            filter = 1;
        } else if (key.length() > 0 && color.length() > 0 && price.length() <= 0) {
            //filter brand, color
            filter = 2;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() <= 0) {
            //filter brand
            filter = 3;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() > 0) {
            //filter color and price
            filter = 4;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() <= 0) {
            //filter color
            filter = 5;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() <= 0) {
            //filter no
            filter = 6;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() > 0) {
            //filter price
            filter = 7;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() > 0) {
            //filter brand and price
            filter = 8;
        }


        switch (filter) {
            case 1:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PWatch pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        for (int j11 = 0; j11 < price.length(); j11++) {
                                            //String priceAmount = price.getJSONObject(j11).getString("price");
                                            double salePrice = Double.valueOf(pro.getSalePrice());
                                            //  System.out.println("salePrice : " + salePrice);
                                            // System.out.println("minPrice : " + minPrice);
                                            //  System.out.println("maxPrice : " + maxPrice);
                                            if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                                // System.out.println("salePrice inside : " + salePrice);
                                                productList1.add(pro);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PWatch pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 3:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PWatch pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand()) || pro.getProductName().contains(brandName)) {
                            productList1.add(pro);
                        }
                    }
                }
                break;
            case 4:
                for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PWatch pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                // System.out.println("keep in list - " + pro.getProductName());
                                for (int j11 = 0; j11 < price.length(); j11++) {
                                    String priceAmount = price.getJSONObject(j11).getString("price");
                                    double salePrice = Double.valueOf(pro.getSalePrice());
                                    if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                        //  System.out.println("salePrice inside : " + salePrice);
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }

                }
                break;
            case 5:
                for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PWatch pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                productList1.add(pro);
                            }
                        }
                    }

                }
                break;
            case 6:

                break;
            case 7:
                for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PWatch pro = productIterator.next();
                    for (int j11 = 0; j11 < price.length(); j11++) {
                        String priceAmount = price.getJSONObject(j11).getString("price");
                        double salePrice = Double.valueOf(pro.getSalePrice());
                        if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                            //  System.out.println("salePrice inside : " + salePrice);
                            productList1.add(pro);
                        }
                    }
                }

                break;
            case 8:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PWatch> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PWatch pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {

                            for (int j11 = 0; j11 < price.length(); j11++) {
                                //String priceAmount = price.getJSONObject(j11).getString("price");
                                double salePrice = Double.valueOf(pro.getSalePrice());
                                //  System.out.println("salePrice : " + salePrice);
                                //  System.out.println("minPrice : " + minPrice);
                                //  System.out.println("maxPrice : " + maxPrice);
                                if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                    //  System.out.println("salePrice inside : " + salePrice);
                                    productList1.add(pro);
                                }
                            }

                        }
                    }

                }
                break;
            default:
                break;

        }

        if (key.length() == 0 && price.length() == 0 && color.length() == 0) {
            return productList;
        }

        return productList1;
    }

    @Override
    public List<PLaptop> getLaptopQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception {
        List<PLaptop> productList = dataDao.getAllLaptopList();

        List<PLaptop> productList1 = new ArrayList<PLaptop>();

        double maxPrice = 0;
        double minPrice = 0;


        for (int j11 = 0; j11 < price.length(); j11++) {
            String priceAmount = price.getJSONObject(j11).getString("price");
            if (priceAmount.equalsIgnoreCase("Rs. 2000 and below")) {
                maxPrice = 2000;
                minPrice = 1;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 5001 - 10000")) {
                maxPrice = 10000;
                minPrice = 5001;
            } else if (priceAmount.equalsIgnoreCase("Rs 10001 - 18000")) {
                maxPrice = 18000;
                minPrice = 10001;
            } else if (priceAmount.equalsIgnoreCase("Rs 18001 - 25000")) {
                maxPrice = 25000;
                minPrice = 18001;
            } else if (priceAmount.equalsIgnoreCase("Rs 25001 - 35000")) {
                maxPrice = 35000;
                minPrice = 25001;
            } else if (priceAmount.equalsIgnoreCase("Rs 35001 and above")) {
                maxPrice = 200000;
                minPrice = 35001;
            }
        }


        int filter = 0;
        if (key.length() > 0 && color.length() > 0 && price.length() > 0) {
            //filter brand, color and price
            filter = 1;
        } else if (key.length() > 0 && color.length() > 0 && price.length() <= 0) {
            //filter brand, color
            filter = 2;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() <= 0) {
            //filter brand
            filter = 3;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() > 0) {
            //filter color and price
            filter = 4;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() <= 0) {
            //filter color
            filter = 5;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() <= 0) {
            //filter no
            filter = 6;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() > 0) {
            //filter price
            filter = 7;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() > 0) {
            //filter brand and price
            filter = 8;
        }


        switch (filter) {
            case 1:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PLaptop pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        for (int j11 = 0; j11 < price.length(); j11++) {
                                            //String priceAmount = price.getJSONObject(j11).getString("price");
                                            double salePrice = Double.valueOf(pro.getSalePrice());
                                            //  System.out.println("salePrice : " + salePrice);
                                            // System.out.println("minPrice : " + minPrice);
                                            //  System.out.println("maxPrice : " + maxPrice);
                                            if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                                // System.out.println("salePrice inside : " + salePrice);
                                                productList1.add(pro);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PLaptop pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 3:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PLaptop pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand()) || pro.getProductName().contains(brandName)) {
                            productList1.add(pro);
                        }
                    }
                }
                break;
            case 4:
                for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PLaptop pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                // System.out.println("keep in list - " + pro.getProductName());
                                for (int j11 = 0; j11 < price.length(); j11++) {
                                    String priceAmount = price.getJSONObject(j11).getString("price");
                                    double salePrice = Double.valueOf(pro.getSalePrice());
                                    if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                        //  System.out.println("salePrice inside : " + salePrice);
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }

                }
                break;
            case 5:
                for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PLaptop pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                productList1.add(pro);
                            }
                        }
                    }

                }
                break;
            case 6:

                break;
            case 7:
                for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PLaptop pro = productIterator.next();
                    for (int j11 = 0; j11 < price.length(); j11++) {
                        String priceAmount = price.getJSONObject(j11).getString("price");
                        double salePrice = Double.valueOf(pro.getSalePrice());
                        if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                            //  System.out.println("salePrice inside : " + salePrice);
                            productList1.add(pro);
                        }
                    }
                }

                break;
            case 8:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PLaptop> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PLaptop pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {

                            for (int j11 = 0; j11 < price.length(); j11++) {
                                //String priceAmount = price.getJSONObject(j11).getString("price");
                                double salePrice = Double.valueOf(pro.getSalePrice());
                                //  System.out.println("salePrice : " + salePrice);
                                //  System.out.println("minPrice : " + minPrice);
                                //  System.out.println("maxPrice : " + maxPrice);
                                if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                    //  System.out.println("salePrice inside : " + salePrice);
                                    productList1.add(pro);
                                }
                            }

                        }
                    }

                }
                break;
            default:
                break;

        }

        if (key.length() == 0 && price.length() == 0 && color.length() == 0) {
            return productList;
        }

        return productList1;
    }

    @Override
    public List<Product> getProductQueryResult(JSONArray key, JSONArray color, JSONArray price, String productType) throws Exception{
        List<Product> productList = dataDao.getAllProductList(productType);

        List<Product> productList1 = new ArrayList<Product>();

        double maxPrice = 0;
        double minPrice = 0;


        for (int j11 = 0; j11 < price.length(); j11++) {
            String priceAmount = price.getJSONObject(j11).getString("price");
            if (priceAmount.equalsIgnoreCase("Rs. 2000 and below")) {
                maxPrice = 2000;
                minPrice = 1;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 5001 - 10000")) {
                maxPrice = 10000;
                minPrice = 5001;
            } else if (priceAmount.equalsIgnoreCase("Rs 10001 - 18000")) {
                maxPrice = 18000;
                minPrice = 10001;
            } else if (priceAmount.equalsIgnoreCase("Rs 18001 - 25000")) {
                maxPrice = 25000;
                minPrice = 18001;
            } else if (priceAmount.equalsIgnoreCase("Rs 25001 - 35000")) {
                maxPrice = 35000;
                minPrice = 25001;
            } else if (priceAmount.equalsIgnoreCase("Rs 35001 and above")) {
                maxPrice = 200000;
                minPrice = 35001;
            }
        }


        int filter = 0;
        if (key.length() > 0 && color.length() > 0 && price.length() > 0) {
            //filter brand, color and price
            filter = 1;
        } else if (key.length() > 0 && color.length() > 0 && price.length() <= 0) {
            //filter brand, color
            filter = 2;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() <= 0) {
            //filter brand
            filter = 3;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() > 0) {
            //filter color and price
            filter = 4;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() <= 0) {
            //filter color
            filter = 5;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() <= 0) {
            //filter no
            filter = 6;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() > 0) {
            //filter price
            filter = 7;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() > 0) {
            //filter brand and price
            filter = 8;
        }


        switch (filter) {
            case 1:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        Product pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        for (int j11 = 0; j11 < price.length(); j11++) {
                                            //String priceAmount = price.getJSONObject(j11).getString("price");
                                            double salePrice = Double.valueOf(pro.getSalePrice());
                                            //  System.out.println("salePrice : " + salePrice);
                                            // System.out.println("minPrice : " + minPrice);
                                            //  System.out.println("maxPrice : " + maxPrice);
                                            if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                                // System.out.println("salePrice inside : " + salePrice);
                                                productList1.add(pro);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        Product pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 3:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    System.out.println("brand filter only ############ " + brandName);
                    for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        Product pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand()) || pro.getProductName().contains(brandName)) {
                            productList1.add(pro);
                        }
                    }
                }
                break;
            case 4:
                for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    Product pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                // System.out.println("keep in list - " + pro.getProductName());
                                for (int j11 = 0; j11 < price.length(); j11++) {
                                    String priceAmount = price.getJSONObject(j11).getString("price");
                                    double salePrice = Double.valueOf(pro.getSalePrice());
                                    if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                        //  System.out.println("salePrice inside : " + salePrice);
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }

                }
                break;
            case 5:
                for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    Product pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                productList1.add(pro);
                            }
                        }
                    }

                }
                break;
            case 6:

                break;
            case 7:
                for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    Product pro = productIterator.next();
                    for (int j11 = 0; j11 < price.length(); j11++) {
                        String priceAmount = price.getJSONObject(j11).getString("price");
                        double salePrice = Double.valueOf(pro.getSalePrice());
                        if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                            //  System.out.println("salePrice inside : " + salePrice);
                            productList1.add(pro);
                        }
                    }
                }

                break;
            case 8:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<Product> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        Product pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {

                            for (int j11 = 0; j11 < price.length(); j11++) {
                                //String priceAmount = price.getJSONObject(j11).getString("price");
                                double salePrice = Double.valueOf(pro.getSalePrice());
                                //  System.out.println("salePrice : " + salePrice);
                                //  System.out.println("minPrice : " + minPrice);
                                //  System.out.println("maxPrice : " + maxPrice);
                                if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                    //  System.out.println("salePrice inside : " + salePrice);
                                    productList1.add(pro);
                                }
                            }

                        }
                    }

                }
                break;
            default:
                break;

        }

        if (key.length() == 0 && price.length() == 0 && color.length() == 0) {
            return productList;
        }
        System.out.println("Brand specific query from service products are : - " + productList1.size());
        return productList1;
    }

    @Override
    public List<PTelevision> getTelevisionQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception {
        List<PTelevision> productList = dataDao.getAllTelevisionList();

        List<PTelevision> productList1 = new ArrayList<PTelevision>();

        double maxPrice = 0;
        double minPrice = 0;


        for (int j11 = 0; j11 < price.length(); j11++) {
            String priceAmount = price.getJSONObject(j11).getString("price");
            if (priceAmount.equalsIgnoreCase("Rs. 2000 and below")) {
                maxPrice = 2000;
                minPrice = 1;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 2001 - 5000")) {
                maxPrice = 5000;
                minPrice = 2001;
            } else if (priceAmount.equalsIgnoreCase("Rs 5001 - 10000")) {
                maxPrice = 10000;
                minPrice = 5001;
            } else if (priceAmount.equalsIgnoreCase("Rs 10001 - 18000")) {
                maxPrice = 18000;
                minPrice = 10001;
            } else if (priceAmount.equalsIgnoreCase("Rs 18001 - 25000")) {
                maxPrice = 25000;
                minPrice = 18001;
            } else if (priceAmount.equalsIgnoreCase("Rs 25001 - 35000")) {
                maxPrice = 35000;
                minPrice = 25001;
            } else if (priceAmount.equalsIgnoreCase("Rs 35001 and above")) {
                maxPrice = 200000;
                minPrice = 35001;
            }
        }


        int filter = 0;
        if (key.length() > 0 && color.length() > 0 && price.length() > 0) {
            //filter brand, color and price
            filter = 1;
        } else if (key.length() > 0 && color.length() > 0 && price.length() <= 0) {
            //filter brand, color
            filter = 2;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() <= 0) {
            //filter brand
            filter = 3;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() > 0) {
            //filter color and price
            filter = 4;
        } else if (key.length() <= 0 && color.length() > 0 && price.length() <= 0) {
            //filter color
            filter = 5;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() <= 0) {
            //filter no
            filter = 6;
        } else if (key.length() <= 0 && color.length() <= 0 && price.length() > 0) {
            //filter price
            filter = 7;
        } else if (key.length() > 0 && color.length() <= 0 && price.length() > 0) {
            //filter brand and price
            filter = 8;
        }


        switch (filter) {
            case 1:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PTelevision pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        for (int j11 = 0; j11 < price.length(); j11++) {
                                            //String priceAmount = price.getJSONObject(j11).getString("price");
                                            double salePrice = Double.valueOf(pro.getSalePrice());
                                            //  System.out.println("salePrice : " + salePrice);
                                            // System.out.println("minPrice : " + minPrice);
                                            //  System.out.println("maxPrice : " + maxPrice);
                                            if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                                // System.out.println("salePrice inside : " + salePrice);
                                                productList1.add(pro);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PTelevision pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {
                            for (int j1 = 0; j1 < color.length(); j1++) {
                                String colorName = color.getJSONObject(j1).getString("color");
                                if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                                    if (pro.getProductName().contains(colorName)) {
                                        // System.out.println("keep in list - " + pro.getProductName());
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 3:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PTelevision pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand()) || pro.getProductName().contains(brandName)) {
                            productList1.add(pro);
                        }
                    }
                }
                break;
            case 4:
                for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PTelevision pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                // System.out.println("keep in list - " + pro.getProductName());
                                for (int j11 = 0; j11 < price.length(); j11++) {
                                    String priceAmount = price.getJSONObject(j11).getString("price");
                                    double salePrice = Double.valueOf(pro.getSalePrice());
                                    if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                        //  System.out.println("salePrice inside : " + salePrice);
                                        productList1.add(pro);
                                    }
                                }
                            }
                        }
                    }

                }
                break;
            case 5:
                for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PTelevision pro = productIterator.next();
                    for (int j1 = 0; j1 < color.length(); j1++) {
                        String colorName = color.getJSONObject(j1).getString("color");
                        if (colorName != null && !colorName.equalsIgnoreCase("") && !colorName.equalsIgnoreCase("All")) {
                            if (pro.getProductName().contains(colorName)) {
                                productList1.add(pro);
                            }
                        }
                    }

                }
                break;
            case 6:

                break;
            case 7:
                for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                    PTelevision pro = productIterator.next();
                    for (int j11 = 0; j11 < price.length(); j11++) {
                        String priceAmount = price.getJSONObject(j11).getString("price");
                        double salePrice = Double.valueOf(pro.getSalePrice());
                        if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                            //  System.out.println("salePrice inside : " + salePrice);
                            productList1.add(pro);
                        }
                    }
                }

                break;
            case 8:
                for (int j = 0; j < key.length(); j++) {
                    String brandName = key.getJSONObject(j).getString("name");
                    for (Iterator<PTelevision> productIterator = productList.iterator(); productIterator.hasNext(); ) {
                        PTelevision pro = productIterator.next();
                        if (brandName.equalsIgnoreCase(pro.getBrand())) {

                            for (int j11 = 0; j11 < price.length(); j11++) {
                                //String priceAmount = price.getJSONObject(j11).getString("price");
                                double salePrice = Double.valueOf(pro.getSalePrice());
                                //  System.out.println("salePrice : " + salePrice);
                                //  System.out.println("minPrice : " + minPrice);
                                //  System.out.println("maxPrice : " + maxPrice);
                                if (Double.compare(salePrice, minPrice) > 0 && Double.compare(salePrice, maxPrice) < 0) {
                                    //  System.out.println("salePrice inside : " + salePrice);
                                    productList1.add(pro);
                                }
                            }

                        }
                    }

                }
                break;
            default:
                break;

        }

        if (key.length() == 0 && price.length() == 0 && color.length() == 0) {
            return productList;
        }

        return productList1;
    }


    public List<PMobile> compareProductPrice(String productName) throws Exception{
        List<PMobile> productList = dataDao.getAllMobileList();
        List<PMobile> productsAmazon1 = getAmazonProductMatchResults(productName);

        for (PMobile productAmz : productsAmazon1) {
            productAmz.setMerchant("Amazon");
            productList.add(productAmz);
        }

        StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);

        // 1. create the index
        Directory index = new RAMDirectory();

        IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

        IndexWriter w = new IndexWriter(index, config);
        for (PMobile product : productList) {
            addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(), product.getMediumImage());
        }
        w.close();
        // 2. query

        List<String> myList = new ArrayList<String>(Arrays.asList(productName.split(" ")));
        List<String> finalList = new ArrayList<String>();
        for (String a : myList) {
            //  System.out.println("List - " + a);
            String b = StringUtils.replaceOnce(a, a, "+" + a);
            //  System.out.println("List - " + b);
            finalList.add(b);
        }

        StringBuilder sb = new StringBuilder();

        for (Object obj : finalList) {
            sb.append(obj.toString());
            sb.append("\t");
        }

        String querystr = sb.toString();
        System.out.println("query string = " + querystr);

        // the "title" arg specifies the default field to use
        // when no field is explicitly specified in the query.
        Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(querystr);

        // 3. search
        int hitsPerPage = 10000;
        IndexReader reader11 = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader11);
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        searcher.search(q, collector);
        ScoreDoc[] hits = collector.topDocs().scoreDocs;

        // 4. display results

        List<PMobile> productList1 = new ArrayList<PMobile>();

        //  System.out.println("productList before searching = " + productList.size());
        //  System.out.println("Found " + hits.length + " hits.");
        for (int i = 0; i < hits.length; ++i) {
            int docId = hits[i].doc;
            PMobile product45 = new PMobile();
            Document d = searcher.doc(docId);
            System.out.println((i + 1) + ". " + d.get("isbn") + "\t" + d.get("title") + "\t" + d.get("merchant"));


            product45.setProductName(d.get("title"));
            product45.setSalePrice((Double.valueOf(d.get("isbn").replaceAll("[^\\d.]", ""))).intValue());
            product45.setMerchant(d.get("merchant"));
            product45.setProductURL(d.get("URL"));
           /* product45.setProductReviewUrl(d.get("productReview"));
            product45.setEditorialReview(d.get("editReview")); */


/*            for (int l = 0; l <= productList.size()-1; l++) {
                if (d.get("title").equalsIgnoreCase(productList.get(l).getProductName())) {
                    productList1.add(productList.get(l));
                }
            }*/


            productList1.add(product45);
        }



        for (Iterator<PMobile> iter = productList1.iterator(); iter.hasNext(); ) {

            PMobile p = iter.next();
            if (p.getProductName().toLowerCase().contains("case") || p.getProductName().toLowerCase().contains("screen") ||
                    p.getProductName().toLowerCase().contains("cover") || p.getProductName().toLowerCase().contains("pouch")) {
                iter.remove();

            }

        }

        return productList1;
    }


    public List<PWatch> compareWatchProductPrice(String productName) throws Exception{
        List<PWatch> productList = dataDao.getAllWatchList();
        List<PWatch> productsAmazon1 = getAmazonWatchProductMatchResults(productName);

        for (PWatch productAmz : productsAmazon1) {
            productAmz.setMerchant("Amazon");
            productList.add(productAmz);
        }

        StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);

        // 1. create the index
        Directory index = new RAMDirectory();

        IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

        IndexWriter w = new IndexWriter(index, config);
        for (PWatch product : productList) {
            addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(), product.getMediumImage());
        }
        w.close();
        // 2. query

        List<String> myList = new ArrayList<String>(Arrays.asList(productName.split(" ")));
        List<String> finalList = new ArrayList<String>();
        for (String a : myList) {
            //  System.out.println("List - " + a);
            String b = StringUtils.replaceOnce(a, a, " " + a);
            //  System.out.println("List - " + b);
            finalList.add(b);
        }

        StringBuilder sb = new StringBuilder();

        for (Object obj : finalList) {
            sb.append(obj.toString());
            sb.append("\t");
        }

        String querystr = sb.toString();
        System.out.println("query string = " + querystr);

        // the "title" arg specifies the default field to use
        // when no field is explicitly specified in the query.
        Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(querystr);

        // 3. search
        int hitsPerPage = 10000;
        IndexReader reader11 = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader11);
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        searcher.search(q, collector);
        ScoreDoc[] hits = collector.topDocs().scoreDocs;

        // 4. display results

        List<PWatch> productList1 = new ArrayList<PWatch>();

        //  System.out.println("productList before searching = " + productList.size());
        //  System.out.println("Found " + hits.length + " hits.");
        for (int i = 0; i < hits.length; ++i) {
            int docId = hits[i].doc;
            PWatch product45 = new PWatch();
            Document d = searcher.doc(docId);
            System.out.println((i + 1) + ". " + d.get("isbn") + "\t" + d.get("title") + "\t" + d.get("merchant"));


            product45.setProductName(d.get("title"));
            product45.setSalePrice((Double.valueOf(d.get("isbn").replaceAll("[^\\d.]", ""))).intValue());
            product45.setMerchant(d.get("merchant"));
            product45.setProductURL(d.get("URL"));
            product45.setMediumImage(d.get("image"));
           /* product45.setProductReviewUrl(d.get("productReview"));
            product45.setEditorialReview(d.get("editReview")); */


/*            for (int l = 0; l <= productList.size()-1; l++) {
                if (d.get("title").equalsIgnoreCase(productList.get(l).getProductName())) {
                    productList1.add(productList.get(l));
                }
            }*/


            productList1.add(product45);
        }



        for (Iterator<PWatch> iter = productList1.iterator(); iter.hasNext(); ) {

            PWatch p = iter.next();
            if (p.getProductName().toLowerCase().contains("case") || p.getProductName().toLowerCase().contains("screen") ||
                    p.getProductName().toLowerCase().contains("cover") || p.getProductName().toLowerCase().contains("pouch")) {
                iter.remove();

            }

        }

        return productList1;
    }

    public List<PLaptop> compareLaptopProductPrice(String productName) throws Exception{
        List<PLaptop> productList = dataDao.getAllLaptopList();
        List<PLaptop> productsAmazon1 = getAmazonLaptopProductMatchResults(productName);

        for (PLaptop productAmz : productsAmazon1) {
            productAmz.setMerchant("Amazon");
            productList.add(productAmz);
        }

        StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);

        // 1. create the index
        Directory index = new RAMDirectory();

        IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

        IndexWriter w = new IndexWriter(index, config);
        for (PLaptop product : productList) {
            addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(), product.getMediumImage());
        }
        w.close();
        // 2. query

        List<String> myList = new ArrayList<String>(Arrays.asList(productName.split(" ")));
        List<String> finalList = new ArrayList<String>();
        for (String a : myList) {
            //  System.out.println("List - " + a);
            String b = StringUtils.replaceOnce(a, a, "" + a);
            //  System.out.println("List - " + b);
            finalList.add(b);
        }

        StringBuilder sb = new StringBuilder();

        for (Object obj : finalList) {
            sb.append(obj.toString());
            sb.append("\t");
        }

        String querystr = sb.toString();
        System.out.println("query string = " + querystr);

        // the "title" arg specifies the default field to use
        // when no field is explicitly specified in the query.
        Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(querystr);

        // 3. search
        int hitsPerPage = 10000;
        IndexReader reader11 = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader11);
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        searcher.search(q, collector);
        ScoreDoc[] hits = collector.topDocs().scoreDocs;

        // 4. display results

        List<PLaptop> productList1 = new ArrayList<PLaptop>();

        //  System.out.println("productList before searching = " + productList.size());
        //  System.out.println("Found " + hits.length + " hits.");
        for (int i = 0; i < hits.length; ++i) {
            int docId = hits[i].doc;
            PLaptop product45 = new PLaptop();
            Document d = searcher.doc(docId);
            System.out.println((i + 1) + ". " + d.get("isbn") + "\t" + d.get("title") + "\t" + d.get("merchant"));


            product45.setProductName(d.get("title"));
            product45.setSalePrice((Double.valueOf(d.get("isbn").replaceAll("[^\\d.]", ""))).intValue());
            product45.setMerchant(d.get("merchant"));
            product45.setProductURL(d.get("URL"));
           /* product45.setProductReviewUrl(d.get("productReview"));
            product45.setEditorialReview(d.get("editReview")); */


/*            for (int l = 0; l <= productList.size()-1; l++) {
                if (d.get("title").equalsIgnoreCase(productList.get(l).getProductName())) {
                    productList1.add(productList.get(l));
                }
            }*/


            productList1.add(product45);
        }



        for (Iterator<PLaptop> iter = productList1.iterator(); iter.hasNext(); ) {

            PLaptop p = iter.next();
            if (p.getProductName().toLowerCase().contains("case") || p.getProductName().toLowerCase().contains("screen") ||
                    p.getProductName().toLowerCase().contains("cover") || p.getProductName().toLowerCase().contains("pouch")) {
                iter.remove();

            }

        }

        return productList1.subList(0, 8);
    }

    public List<Product> compareAllProductPrice(String productName, String productType) throws Exception{
        List<Product> productList = dataDao.getAllProductList(productType);
        List<Product> productsAmazon1 = getAmazonAllProductMatchResults(productName);

        for (Product productAmz : productsAmazon1) {
            productAmz.setMerchant("Amazon");
            productList.add(productAmz);
        }

        StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);

        // 1. create the index
        Directory index = new RAMDirectory();

        IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

        IndexWriter w = new IndexWriter(index, config);
        for (Product product : productList) {
            addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(), product.getMediumImage());
        }
        w.close();
        // 2. query

        List<String> myList = new ArrayList<String>(Arrays.asList(productName.split(" ")));
        List<String> finalList = new ArrayList<String>();
        for (String a : myList) {
            //  System.out.println("List - " + a);
            String b = StringUtils.replaceOnce(a, a, " " + a);
            //  System.out.println("List - " + b);
            finalList.add(b);
        }

        StringBuilder sb = new StringBuilder();

        for (Object obj : finalList) {
            sb.append(obj.toString());
            sb.append("\t");
        }

        String querystr = sb.toString();
        System.out.println("query string = " + querystr);

        // the "title" arg specifies the default field to use
        // when no field is explicitly specified in the query.
        Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(querystr);

        // 3. search
        int hitsPerPage = 10000;
        IndexReader reader11 = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader11);
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        searcher.search(q, collector);
        ScoreDoc[] hits = collector.topDocs().scoreDocs;

        // 4. display results

        List<Product> productList1 = new ArrayList<Product>();

        //  System.out.println("productList before searching = " + productList.size());
        //  System.out.println("Found " + hits.length + " hits.");
        for (int i = 0; i < hits.length; ++i) {
            int docId = hits[i].doc;
            Product product45 = new Product();
            Document d = searcher.doc(docId);
            System.out.println((i + 1) + ". " + d.get("isbn") + "\t" + d.get("title") + "\t" + d.get("merchant"));


            product45.setProductName(d.get("title"));
            product45.setSalePrice((Double.valueOf(d.get("isbn").replaceAll("[^\\d.]", ""))).intValue());
            product45.setMerchant(d.get("merchant"));
            product45.setProductURL(d.get("URL"));
           product45.setMediumImage(d.get("image"));
            /*product45.setEditorialReview(d.get("editReview")); */


/*            for (int l = 0; l <= productList.size()-1; l++) {
                if (d.get("title").equalsIgnoreCase(productList.get(l).getProductName())) {
                    productList1.add(productList.get(l));
                }
            }*/


            productList1.add(product45);
        }



        for (Iterator<Product> iter = productList1.iterator(); iter.hasNext(); ) {

            Product p = iter.next();
            if (p.getProductName().toLowerCase().contains("case") || p.getProductName().toLowerCase().contains("screen") ||
                    p.getProductName().toLowerCase().contains("cover") || p.getProductName().toLowerCase().contains("pouch")) {
                iter.remove();

            }

        }

        return productList1.subList(0, 6);
    }

    public List<PTelevision> compareTelevisionProductPrice(String productName) throws Exception{
        List<PTelevision> productList = dataDao.getAllTelevisionList();
        List<PTelevision> productsAmazon1 = getAmazonTelevisionProductMatchResults(productName);

        for (PTelevision productAmz : productsAmazon1) {
            productAmz.setMerchant("Amazon");
            productList.add(productAmz);
        }

        StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);

        // 1. create the index
        Directory index = new RAMDirectory();

        IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

        IndexWriter w = new IndexWriter(index, config);
        for (PTelevision product : productList) {
            addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(), product.getMediumImage());
        }
        w.close();
        // 2. query

        List<String> myList = new ArrayList<String>(Arrays.asList(productName.split(" ")));
        List<String> finalList = new ArrayList<String>();
        for (String a : myList) {
            //  System.out.println("List - " + a);
            String b = StringUtils.replaceOnce(a, a, " " + a);
            //  System.out.println("List - " + b);
            finalList.add(b);
        }

        StringBuilder sb = new StringBuilder();

        for (Object obj : finalList) {
            sb.append(obj.toString());
            sb.append("\t");
        }

        String querystr = sb.toString();
        System.out.println("query string = " + querystr);

        // the "title" arg specifies the default field to use
        // when no field is explicitly specified in the query.
        Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(querystr);

        // 3. search
        int hitsPerPage = 10000;
        IndexReader reader11 = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader11);
        TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
        searcher.search(q, collector);
        ScoreDoc[] hits = collector.topDocs().scoreDocs;

        // 4. display results

        List<PTelevision> productList1 = new ArrayList<PTelevision>();

        //  System.out.println("productList before searching = " + productList.size());
        //  System.out.println("Found " + hits.length + " hits.");
        for (int i = 0; i < hits.length; ++i) {
            int docId = hits[i].doc;
            PTelevision product45 = new PTelevision();
            Document d = searcher.doc(docId);
            System.out.println((i + 1) + ". " + d.get("isbn") + "\t" + d.get("title") + "\t" + d.get("merchant"));


            product45.setProductName(d.get("title"));
            product45.setSalePrice((Double.valueOf(d.get("isbn").replaceAll("[^\\d.]", ""))).intValue());
            product45.setMerchant(d.get("merchant"));
            product45.setProductURL(d.get("URL"));
           /* product45.setProductReviewUrl(d.get("productReview"));
            product45.setEditorialReview(d.get("editReview")); */


/*            for (int l = 0; l <= productList.size()-1; l++) {
                if (d.get("title").equalsIgnoreCase(productList.get(l).getProductName())) {
                    productList1.add(productList.get(l));
                }
            }*/


            productList1.add(product45);
        }



        for (Iterator<PTelevision> iter = productList1.iterator(); iter.hasNext(); ) {

            PTelevision p = iter.next();
            if (p.getProductName().toLowerCase().contains("case") || p.getProductName().toLowerCase().contains("screen") ||
                    p.getProductName().toLowerCase().contains("cover") || p.getProductName().toLowerCase().contains("pouch")) {
                iter.remove();

            }

        }

        return productList1.subList(0, 8);
    }

    public List<PMobile> getAmazonProductMatchResults(String productName){
        // Set the service:
        AWSECommerceService service = new AWSECommerceService();
        service.setHandlerResolver(new AwsHandlerResolver(
                "+qVZa7RGQCVkovKwaFrHU3RgjxQuGo85ukGs05J2"));
        // Set the service port:
        AWSECommerceServicePortType port = service
                .getAWSECommerceServicePortIN();
        System.out.println("Initializing :::: ");

        // Get the operation object:
        ItemSearchRequest itemRequest = new ItemSearchRequest();

        System.out.println("Initializing :::: - 1");

        // Fill in the request object:
        itemRequest.setSearchIndex("All");
        itemRequest.setKeywords(productName);
        itemRequest.setAvailability("Available");
        itemRequest.getResponseGroup().add("Large");
        itemRequest.getResponseGroup().add("Reviews");
        itemRequest.getResponseGroup().add("Accessories");
        itemRequest.getResponseGroup().add("OfferFull");
        itemRequest.getResponseGroup().add("Offers");
        itemRequest.getResponseGroup().add("Similarities");

        itemRequest.setItemPage(BigInteger.valueOf(1));
        //itemRequest.setR

        System.out.println("Set item Request :::: ");

        // itemRequest.setVersion("2013-08-01");
        ItemSearch ItemElement = new ItemSearch();
        ItemElement.setAWSAccessKeyId("AKIAJ7VQZNJLS5ALA2QA");
        ItemElement.setAssociateTag("pinglein-21");
        //ItemElement.setMarketplaceDomain("www.amazon.in");

        ItemElement.getRequest().add(itemRequest);
        System.out.println("Set item Element :::: ");

        // Call the Web service operation and store the response
        // in the response object:
        ItemSearchResponse response = port.itemSearch(ItemElement);
        System.out.println("Response is :::: " + response.getItems().size());

        List<PMobile> products = new ArrayList<PMobile>();

        for (Items item : response.getItems()) {
            System.out.println("Inside" + item.getItem().size());

            for (int i=0; i< item.getItem().size(); i++) {
                PMobile product = new PMobile();
                product.setProductName(item.getItem().get(0).getItemAttributes().getTitle());
                product.setProductURL(item.getItem().get(0).getDetailPageURL());
                product.setSalePrice(Double.valueOf(item.getItem().get(0).getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", "")).intValue());
                product.setMediumImage(item.getItem().get(0).getImageSets().get(0).getImageSet().get(0).getMediumImage().getURL());
                product.setMerchant("Amazon");
                products.add(product);
                break;
            }
        }
        return products;
    }

    public List<PWatch> getAmazonWatchProductMatchResults(String productName){
        // Set the service:
        AWSECommerceService service = new AWSECommerceService();
        service.setHandlerResolver(new AwsHandlerResolver(
                "+qVZa7RGQCVkovKwaFrHU3RgjxQuGo85ukGs05J2"));
        // Set the service port:
        AWSECommerceServicePortType port = service
                .getAWSECommerceServicePortIN();
        System.out.println("Initializing :::: ");

        // Get the operation object:
        ItemSearchRequest itemRequest = new ItemSearchRequest();

        System.out.println("Initializing :::: - 1");

        // Fill in the request object:
        itemRequest.setSearchIndex("All");
        itemRequest.setKeywords(productName);
        itemRequest.setAvailability("Available");
        itemRequest.getResponseGroup().add("Large");
        itemRequest.getResponseGroup().add("Reviews");
        itemRequest.getResponseGroup().add("Accessories");
        itemRequest.getResponseGroup().add("OfferFull");
        itemRequest.getResponseGroup().add("Offers");
        itemRequest.getResponseGroup().add("Similarities");

        itemRequest.setItemPage(BigInteger.valueOf(1));
        //itemRequest.setR

        System.out.println("Set item Request :::: ");

        // itemRequest.setVersion("2013-08-01");
        ItemSearch ItemElement = new ItemSearch();
        ItemElement.setAWSAccessKeyId("AKIAJ7VQZNJLS5ALA2QA");
        ItemElement.setAssociateTag("pinglein-21");
        //ItemElement.setMarketplaceDomain("www.amazon.in");

        ItemElement.getRequest().add(itemRequest);
        System.out.println("Set item Element :::: ");

        // Call the Web service operation and store the response
        // in the response object:
        ItemSearchResponse response = port.itemSearch(ItemElement);
        System.out.println("Response is :::: " + response.getItems().size());

        List<PWatch> products = new ArrayList<PWatch>();

        for (Items item : response.getItems()) {
            System.out.println("Inside" + item.getItem().size());

            for (int i=0; i< item.getItem().size(); i++) {
                PWatch product = new PWatch();
                product.setProductName(item.getItem().get(0).getItemAttributes().getTitle());
                product.setProductURL(item.getItem().get(0).getDetailPageURL());
                product.setSalePrice(Double.valueOf(item.getItem().get(0).getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", "")).intValue());
                product.setMediumImage(item.getItem().get(0).getImageSets().get(0).getImageSet().get(0).getMediumImage().getURL());
                product.setMerchant("Amazon");
                products.add(product);
                break;
            }
        }
        return products;
    }

    public List<PLaptop> getAmazonLaptopProductMatchResults(String productName){
        // Set the service:
        AWSECommerceService service = new AWSECommerceService();
        service.setHandlerResolver(new AwsHandlerResolver(
                "+qVZa7RGQCVkovKwaFrHU3RgjxQuGo85ukGs05J2"));
        // Set the service port:
        AWSECommerceServicePortType port = service
                .getAWSECommerceServicePortIN();
        System.out.println("Initializing :::: ");

        // Get the operation object:
        ItemSearchRequest itemRequest = new ItemSearchRequest();

        System.out.println("Initializing :::: - 1");

        // Fill in the request object:
        itemRequest.setSearchIndex("All");
        itemRequest.setKeywords(productName);
        itemRequest.setAvailability("Available");
        itemRequest.getResponseGroup().add("Large");
        itemRequest.getResponseGroup().add("Reviews");
        itemRequest.getResponseGroup().add("Accessories");
        itemRequest.getResponseGroup().add("OfferFull");
        itemRequest.getResponseGroup().add("Offers");
        itemRequest.getResponseGroup().add("Similarities");

        itemRequest.setItemPage(BigInteger.valueOf(1));
        //itemRequest.setR

        System.out.println("Set item Request :::: ");

        // itemRequest.setVersion("2013-08-01");
        ItemSearch ItemElement = new ItemSearch();
        ItemElement.setAWSAccessKeyId("AKIAJ7VQZNJLS5ALA2QA");
        ItemElement.setAssociateTag("pinglein-21");
        //ItemElement.setMarketplaceDomain("www.amazon.in");

        ItemElement.getRequest().add(itemRequest);
        System.out.println("Set item Element :::: ");

        // Call the Web service operation and store the response
        // in the response object:
        ItemSearchResponse response = port.itemSearch(ItemElement);
        System.out.println("Response is :::: " + response.getItems().size());

        List<PLaptop> products = new ArrayList<PLaptop>();

        for (Items item : response.getItems()) {
            System.out.println("Inside" + item.getItem().size());

            for (int i=0; i< item.getItem().size(); i++) {
                PLaptop product = new PLaptop();
                product.setProductName(item.getItem().get(0).getItemAttributes().getTitle());
                product.setProductURL(item.getItem().get(0).getDetailPageURL());
                product.setSalePrice(Double.valueOf(item.getItem().get(0).getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", "")).intValue());
                product.setMediumImage(item.getItem().get(0).getImageSets().get(0).getImageSet().get(0).getMediumImage().getURL());
                product.setMerchant("Amazon");
                products.add(product);
                break;
            }
        }
        return products;
    }

    public List<PTelevision> getAmazonTelevisionProductMatchResults(String productName){
        // Set the service:
        AWSECommerceService service = new AWSECommerceService();
        service.setHandlerResolver(new AwsHandlerResolver(
                "+qVZa7RGQCVkovKwaFrHU3RgjxQuGo85ukGs05J2"));
        // Set the service port:
        AWSECommerceServicePortType port = service
                .getAWSECommerceServicePortIN();
        System.out.println("Initializing :::: ");

        // Get the operation object:
        ItemSearchRequest itemRequest = new ItemSearchRequest();

        System.out.println("Initializing :::: - 1");

        // Fill in the request object:
        itemRequest.setSearchIndex("All");
        itemRequest.setKeywords(productName);
        itemRequest.setAvailability("Available");
        itemRequest.getResponseGroup().add("Large");
        itemRequest.getResponseGroup().add("Reviews");
        itemRequest.getResponseGroup().add("Accessories");
        itemRequest.getResponseGroup().add("OfferFull");
        itemRequest.getResponseGroup().add("Offers");
        itemRequest.getResponseGroup().add("Similarities");

        itemRequest.setItemPage(BigInteger.valueOf(1));
        //itemRequest.setR

        System.out.println("Set item Request :::: ");

        // itemRequest.setVersion("2013-08-01");
        ItemSearch ItemElement = new ItemSearch();
        ItemElement.setAWSAccessKeyId("AKIAJ7VQZNJLS5ALA2QA");
        ItemElement.setAssociateTag("pinglein-21");
        //ItemElement.setMarketplaceDomain("www.amazon.in");

        ItemElement.getRequest().add(itemRequest);
        System.out.println("Set item Element :::: ");

        // Call the Web service operation and store the response
        // in the response object:
        ItemSearchResponse response = port.itemSearch(ItemElement);
        System.out.println("Response is :::: " + response.getItems().size());

        List<PTelevision> products = new ArrayList<PTelevision>();

        for (Items item : response.getItems()) {
            System.out.println("Inside" + item.getItem().size());

            for (int i=0; i< item.getItem().size(); i++) {
                PTelevision product = new PTelevision();
                product.setProductName(item.getItem().get(0).getItemAttributes().getTitle());
                product.setProductURL(item.getItem().get(0).getDetailPageURL());
                product.setSalePrice(Double.valueOf(item.getItem().get(0).getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", "")).intValue());
                product.setMediumImage(item.getItem().get(0).getImageSets().get(0).getImageSet().get(0).getMediumImage().getURL());
                product.setMerchant("Amazon");
                products.add(product);
                break;
            }
        }
        return products;
    }

    public List<Product> getAmazonAllProductMatchResults(String productName){
        // Set the service:
        AWSECommerceService service = new AWSECommerceService();
        service.setHandlerResolver(new AwsHandlerResolver(
                "+qVZa7RGQCVkovKwaFrHU3RgjxQuGo85ukGs05J2"));
        // Set the service port:
        AWSECommerceServicePortType port = service
                .getAWSECommerceServicePortIN();
        System.out.println("Initializing :::: ");

        // Get the operation object:
        ItemSearchRequest itemRequest = new ItemSearchRequest();

        System.out.println("Initializing :::: - 1");

        // Fill in the request object:
        itemRequest.setSearchIndex("All");
        itemRequest.setKeywords(productName);
        itemRequest.setAvailability("Available");
        itemRequest.getResponseGroup().add("Large");
        itemRequest.getResponseGroup().add("Reviews");
        itemRequest.getResponseGroup().add("Accessories");
        itemRequest.getResponseGroup().add("OfferFull");
        itemRequest.getResponseGroup().add("Offers");
        itemRequest.getResponseGroup().add("Similarities");

        itemRequest.setItemPage(BigInteger.valueOf(1));
        //itemRequest.setR

        System.out.println("Set item Request :::: ");

        // itemRequest.setVersion("2013-08-01");
        ItemSearch ItemElement = new ItemSearch();
        ItemElement.setAWSAccessKeyId("AKIAJ7VQZNJLS5ALA2QA");
        ItemElement.setAssociateTag("pinglein-21");
        //ItemElement.setMarketplaceDomain("www.amazon.in");

        ItemElement.getRequest().add(itemRequest);
        System.out.println("Set item Element :::: ");

        // Call the Web service operation and store the response
        // in the response object:
        ItemSearchResponse response = port.itemSearch(ItemElement);
        System.out.println("Response is :::: " + response.getItems().size());

        List<Product> products = new ArrayList<Product>();

        for (Items item : response.getItems()) {
            System.out.println("Inside" + item.getItem().size());

            for (int i=0; i< item.getItem().size(); i++) {
                Product product = new Product();
                product.setProductName(item.getItem().get(0).getItemAttributes().getTitle());
                product.setProductURL(item.getItem().get(0).getDetailPageURL());
                product.setSalePrice(Double.valueOf(item.getItem().get(0).getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", "")).intValue());
                product.setMediumImage(item.getItem().get(0).getImageSets().get(0).getImageSet().get(0).getMediumImage().getURL());
                product.setMerchant("Amazon");
                products.add(product);
                break;
            }
        }
        return products;
    }

    private static void addDoc(IndexWriter w, String title, int isbn, String merchant, String prodURL, String productImage) throws IOException {
        Document doc = new Document();
        doc.add(new TextField("title", title, Field.Store.YES));

        if (merchant == null) {
            merchant = "Other";
        }
       /* if (reviewURl == null) {
            reviewURl = "No Review Available";
        }
        if (editorialReview == null) {
            editorialReview = "Please check Seller Website for more details";
        }*/

        // use a string field for isbn because we don't want it tokenized
        doc.add(new IntField("isbn", isbn, Field.Store.YES));
        doc.add(new StringField("merchant", merchant, Field.Store.YES));
        doc.add(new StringField("URL", prodURL, Field.Store.YES));
       /* doc.add(new StringField("productReview", reviewURl, Field.Store.YES));
        doc.add(new StringField("editReview", editorialReview, Field.Store.YES));*/
        doc.add(new StringField("image", productImage, Field.Store.YES));
        w.addDocument(doc);
    }
}
