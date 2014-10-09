package com.beingjavaguys.services;

import com.beingjavaguys.model.*;
import com.beingjavaguys.vo.Product;
import org.json.JSONArray;

import java.util.List;
import java.util.Set;

public interface DataServices {
	public boolean addEntity(Employee employee) throws Exception;
	public Employee getEntityById(long id) throws Exception;
	public List<Employee> getEntityList() throws Exception;
	public boolean deleteEntity(long id) throws Exception;


    public boolean addPMobileEntity(PMobile pMobile) throws Exception;
    public boolean addPWatchEntity(PWatch pWatch) throws Exception;
    public boolean addPLaptopEntity(PLaptop pLaptop) throws Exception;
    public boolean addPTelevisionEntity(PTelevision pTelevision) throws Exception;
    public boolean addPCameraEntity(PCamera pCamera) throws Exception;
    public boolean addPTshirtEntity(PTshirt pTshirt) throws Exception;
    public boolean addPShoesEntity(PShoes pShoes) throws Exception;
    public boolean addPWomenClothingEntity(PWomenClothing pWomenClothing) throws Exception;
    public boolean addPMenClothingEntity(PMenClothing pMenClothing) throws Exception;

    public Set<String> getAllWomenBrandList(String category) throws Exception;
    public Set<String> getAllWomenColorList(String category) throws Exception;
    public List<PWomenClothing> getWomenClothingForCatList(String category) throws Exception;

    public Set<String> getAllWatchBrandList(String category) throws Exception;
    public Set<String> getAllWatchColorList(String category) throws Exception;

    public List<PWatch> getWatchForCatList(String category) throws Exception;

    public Set<String> getAllMenBrandList(String category) throws Exception;
    public Set<String> getAllMenColorList(String category) throws Exception;
    public List<PMenClothing> getMenClothingForCatList(String category) throws Exception;

    public boolean addUser(PUser pUser) throws Exception;


    public List<PMobile> getAllMobileList() throws Exception;
    public List<PMobile> getAllMobileBrandList() throws Exception;

    public List<PWatch> getAllWatchBrandList() throws Exception;
    public List<PWatch> getAllWatchList() throws Exception;

    public List<PLaptop> getAllLaptopBrandList() throws Exception;
    public List<PLaptop> getAllLaptopList() throws Exception;

    public List<PTelevision> getAllTelevisionBrandList() throws Exception;
    public List<PTelevision> getAllTelevisionList() throws Exception;

    public List<Product> getAllProductBrandList(String productType) throws Exception;
    public List<Product> getAllProductList(String productType) throws Exception;


    public List<PMobile> getQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception;
    public List<PWatch> getWatchQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception;
    public List<PLaptop> getLaptopQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception;
    public List<PTelevision> getTelevisionQueryResult(JSONArray key, JSONArray color, JSONArray price) throws Exception;
    public List<Product> getProductQueryResult(JSONArray key, JSONArray color, JSONArray price, String productType) throws Exception;


    public List<PMobile> compareProductPrice(String productName) throws Exception;
    public List<PWatch> compareWatchProductPrice(String productName) throws Exception;
    public List<PLaptop> compareLaptopProductPrice(String productName) throws Exception;
    public List<PTelevision> compareTelevisionProductPrice(String productName) throws Exception;
    public List<Product> compareAllProductPrice(String productName, String productType) throws Exception;

}
