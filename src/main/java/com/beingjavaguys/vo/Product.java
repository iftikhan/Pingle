package com.beingjavaguys.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 9/26/14
 * Time: 9:01 PM
 * To change this template use File | Settings | File Templates.
 */

public class Product implements Serializable {

    private static final long serialVersionUID = 1L;
    private transient long id;
    private transient String productId;
    private String productName;
    private String productDesc;
    private String productURL;
    private int productPrice;
    private int salePrice;
    private String mediumImage;
    private String largeImage;
    private String merchant;
    private String brand;
    private String couponCode;
    private String couponDiscount;
    private String discountAmount;
    private String discountDesc;
    private Date expirationDate;
    private String gender;
    private String category;
    private String inStock;
    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getInStock() {
        return inStock;
    }

    public void setInStock(String inStock) {
        this.inStock = inStock;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public String getCouponDiscount() {
        return couponDiscount;
    }

    public void setCouponDiscount(String couponDiscount) {
        this.couponDiscount = couponDiscount;
    }

    public String getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(String discountAmount) {
        this.discountAmount = discountAmount;
    }

    public String getDiscountDesc() {
        return discountDesc;
    }

    public void setDiscountDesc(String discountDesc) {
        this.discountDesc = discountDesc;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLargeImage() {
        return largeImage;
    }

    public void setLargeImage(String largeImage) {
        this.largeImage = largeImage;
    }

    public String getMediumImage() {
        return mediumImage;
    }

    public void setMediumImage(String mediumImage) {
        this.mediumImage = mediumImage;
    }

    public String getMerchant() {
        return merchant;
    }

    public void setMerchant(String merchant) {
        this.merchant = merchant;
    }

    public String getProductDesc() {
        return productDesc;
    }

    public void setProductDesc(String productDesc) {
        this.productDesc = productDesc;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(int productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductURL() {
        return productURL;
    }

    public void setProductURL(String productURL) {
        this.productURL = productURL;
    }

    public int getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(int salePrice) {
        this.salePrice = salePrice;
    }

    @Override
    public String toString() {
        return "PLaptop{" +
                "brand='" + brand + '\'' +
                ", id=" + id +
                ", productName='" + productName + '\'' +
                ", productDesc='" + productDesc + '\'' +
                ", productURL='" + productURL + '\'' +
                ", productPrice=" + productPrice +
                ", salePrice=" + salePrice +
                ", mediumImage='" + mediumImage + '\'' +
                ", largeImage='" + largeImage + '\'' +
                ", merchant='" + merchant + '\'' +
                ", couponCode='" + couponCode + '\'' +
                ", couponDiscount='" + couponDiscount + '\'' +
                ", discountAmount='" + discountAmount + '\'' +
                ", discountDesc='" + discountDesc + '\'' +
                ", expirationDate='" + expirationDate + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}