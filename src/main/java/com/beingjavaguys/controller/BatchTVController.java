package com.beingjavaguys.controller;

import au.com.bytecode.opencsv.CSVReader;
import au.com.bytecode.opencsv.bean.CsvToBean;
import au.com.bytecode.opencsv.bean.HeaderColumnNameTranslateMappingStrategy;
import com.beingjavaguys.amazon.*;
import com.beingjavaguys.model.PTelevision;
import com.beingjavaguys.model.Status;
import com.beingjavaguys.services.DataServices;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.net.URL;
import java.util.*;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 9/26/14
 * Time: 9:46 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/batch")
public class BatchTVController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(RestController.class);

    @RequestMapping(value = "/tvcreate", method = RequestMethod.POST, consumes = MediaType.ALL_VALUE)
    public
    @ResponseBody
    Status addMobile() throws Exception {
        System.out.println("Calling omgMobileData Services");

        List<PTelevision> omgMobileDataList = omgMobileData();

        List<PTelevision> fliPTelevisionList = flipKartMobileData();

        List<PTelevision> amazonResults = getAmazonResults();

        List<PTelevision> snapAndInfiResults = getSnapdealAndInfibeamResults();

        System.out.println("omgMobileDataList size : " + omgMobileDataList.size());

        for (PTelevision product : omgMobileDataList) {
            dataServices.addPTelevisionEntity(product);
            System.out.println("pTelevision Product added Successfully !");

        }

        for (PTelevision product : fliPTelevisionList) {

            dataServices.addPTelevisionEntity(product);
            System.out.println("pTelevision Product added Successfully !");
            System.out.println("pTelevision Product added Successfully !");

        }

        for (PTelevision product : amazonResults) {
            dataServices.addPTelevisionEntity(product);
            System.out.println("pTelevision Product added Successfully !");

        }

        for (PTelevision product : snapAndInfiResults) {
            dataServices.addPTelevisionEntity(product);
            System.out.println("pTelevision Product added Successfully !");

        }

        return new Status(1, "pTelevision Product added Successfully !");

    }

    public List<PTelevision> omgMobileData() throws IOException, JSONException, org.json.JSONException {

        JSONObject jsonObject = null;
        String str = "http://feeds.omgeu.com/data/feed.aspx?hash=0a4711b01da04e2787681248e0aa4d9d" + "&page=1";
        URL url = new URL(str);
        InputStream is = url.openStream();
        int ptr = 0;
        StringBuilder builder = new StringBuilder();
        while ((ptr = is.read()) != -1) {
            builder.append((char) ptr);
        }
        String xml = builder.toString();

        jsonObject = XML.toJSONObject(xml);

        JSONObject obj = new JSONObject(jsonObject.toString());
        JSONObject productFeed = obj.getJSONObject("ProductFeed");
        JSONObject products = productFeed.getJSONObject("Products");
        JSONArray productList1 = products.getJSONArray("Product");


        List<PTelevision> productList = new ArrayList<PTelevision>();
        for (int i = 0; i < productList1.length(); i++) {

            PTelevision pinfo = new PTelevision();

            JSONObject productAttributes = productList1.getJSONObject(i).getJSONObject("Attributes");
            Object prodAttr = productAttributes.get("Attribute");

            JSONObject categories = productList1.getJSONObject(i).getJSONObject("Categories");
            Object category = categories.get("Category");

            pinfo.setCategory("TV");

            if (prodAttr instanceof JSONArray) {

                for (int j = 0; j < ((JSONArray) prodAttr).length(); j++) {
                    pinfo.setProductName(productList1.getJSONObject(i).getString("Name"));
                    pinfo.setSalePrice(productList1.getJSONObject(i).getInt("Price"));
                    pinfo.setProductDesc(productList1.getJSONObject(i).getString("Description"));
                    pinfo.setMediumImage(productList1.getJSONObject(i).getString("MediumImage"));
                    pinfo.setLargeImage(productList1.getJSONObject(i).getString("LargeImage"));
                    pinfo.setProductURL(productList1.getJSONObject(i).getString("URL"));
                    pinfo.setMerchant(productList1.getJSONObject(i).getString("Merchant"));
                    pinfo.setBrand((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Brand")) ? ((JSONArray) prodAttr).getJSONObject(j).getString("Value") : "");

                    if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Coupon Code"))) {
                        pinfo.setCouponCode(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Brand"))) {
                        pinfo.setBrand(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Discount Amount"))) {
                        pinfo.setDiscountAmount(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Discount Description"))) {
                        pinfo.setDiscountDesc(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Gender"))) {
                        pinfo.setGender(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("inventoryStatus"))) {
                        pinfo.setInStock(((JSONArray) prodAttr).getJSONObject(j).get("Value").toString());
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Color"))) {
                        pinfo.setColor(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Manufacturer"))) {
                        pinfo.setBrand(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    }


                }
            } else if (prodAttr instanceof JSONObject) {
                //System.out.println("It's an Object - not for myntra ");
                pinfo.setProductName(productList1.getJSONObject(i).getString("Name"));
                pinfo.setSalePrice(productList1.getJSONObject(i).getInt("Price"));
                pinfo.setProductDesc(productList1.getJSONObject(i).getString("Description"));
                pinfo.setMediumImage(productList1.getJSONObject(i).getString("MediumImage"));
                pinfo.setLargeImage(productList1.getJSONObject(i).getString("LargeImage"));
                pinfo.setProductURL(productList1.getJSONObject(i).getString("URL"));
                pinfo.setMerchant(productList1.getJSONObject(i).getString("Merchant"));
                pinfo.setInStock("1");
            }


            productList.add(pinfo);

        }

        return productList;
    }

    public List<PTelevision> flipKartMobileData() throws IOException, JSONException, org.json.JSONException {

        List<PTelevision> productList = new ArrayList<PTelevision>();

        HeaderColumnNameTranslateMappingStrategy<PTelevision> beanStrategy = new HeaderColumnNameTranslateMappingStrategy<PTelevision>();
        beanStrategy.setType(PTelevision.class);

        Map<String, String> columnMapping = new HashMap<String, String>();
        columnMapping.put("productId", "productId");
        columnMapping.put("title", "productName");

        columnMapping.put("productUrl", "productURL");

        columnMapping.put("categories", "category");
        columnMapping.put("productBrand", "brand");

        columnMapping.put("inStock", "inStock");

        columnMapping.put("price", "color");
        columnMapping.put("imageUrlStr", "mediumImage");

        //columnMapping.put("Salary", "salary");

        beanStrategy.setColumnMapping(columnMapping);

        CsvToBean<PTelevision> csvToBean = new CsvToBean<PTelevision>();
        CSVReader reader = new CSVReader(new FileReader("C:\\pingleCSV\\Televisions\\FlipkartTelevision.csv"));
        List<PTelevision> emps = csvToBean.parse(beanStrategy, reader);
        System.out.println(emps.size());
        for (PTelevision product : emps) {
            System.out.println("Name - " + product.getProductName() + "Price - " + product.getSalePrice() + " - color - " + product.getColor());
            List<String> items = Arrays.asList(product.getMediumImage().split("\\s*,\\s*"));

            product.setMediumImage(items.get(0));
            product.setMerchant("Flipkart");
            //this is for price, color is price here
            product.setSalePrice((Double.valueOf(product.getColor().replaceAll("[^\\d.]", ""))).intValue());
            if (product.getInStock().equalsIgnoreCase("TRUE")) {
                productList.add(product);

            }

        }

        return productList;

    }

    public List<PTelevision> getAmazonResults() {
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

        List<PTelevision> products = new ArrayList<PTelevision>();
        for (int i = 1; i < 10; i++) {


            // Fill in the request object:
            itemRequest.setSearchIndex("All");
            itemRequest.setKeywords("Television");
            itemRequest.setAvailability("Available");
            itemRequest.setItemPage(BigInteger.valueOf(i));
            itemRequest.getResponseGroup().add("Large");
            itemRequest.getResponseGroup().add("Reviews");
            itemRequest.getResponseGroup().add("Accessories");
            itemRequest.getResponseGroup().add("OfferFull");
            itemRequest.getResponseGroup().add("Offers");
            itemRequest.getResponseGroup().add("Similarities");

            itemRequest.setItemPage(BigInteger.valueOf(i));
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


            for (Items item : response.getItems()) {
                System.out.println("Inside" + item.getItem().size());
                for (Item item1 : item.getItem()) {
                    PTelevision product = new PTelevision();
                    product.setProductName(item1.getItemAttributes().getTitle());
                    product.setProductURL(item1.getDetailPageURL());
                    if (item1.getOfferSummary() != null && item1.getOfferSummary().getLowestNewPrice() != null && item1.getOfferSummary().getLowestNewPrice().getFormattedPrice() != null
                            ) {

                        product.setSalePrice((Double.valueOf(item1.getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", ""))).intValue());
                        System.out.println("Price - " + item1.getOfferSummary().getLowestNewPrice().getFormattedPrice());
                        System.out.println("Price - " + (Double.valueOf(item1.getOfferSummary().getLowestNewPrice().getFormattedPrice().replaceAll("[^\\d.]", ""))).intValue());
                    } else {
                        product.setSalePrice(0);
                        product.setDiscountDesc("Check Seller Site");
                    }
                    product.setMediumImage(item1.getImageSets().get(0).getImageSet().get(0).getMediumImage().getURL());
                    product.setMerchant("Amazon");
                    // product.setProductReviewUrl(item1.getCustomerReviews().getIFrameURL());
//                product.setEditorialReview(item1.getEditorialReviews().getEditorialReview().size() > 0 ? item1.getEditorialReviews().getEditorialReview().get(0).getContent() : "");


//                System.out.println("Image - " + item1.getEditorialReviews().getEditorialReview().get(0).getContent());
/*
                System.out.println("Image - " + item1.getSimilarProducts().getSimilarProduct().get(0).getTitle());
                System.out.println("Image - " + item1.getOffers().getTotalOffers());
                System.out.println("Image - " + item1.getOffers().getOffer().get(0).getMerchant().getName());
                System.out.println("Image - " + item1.getOffers().getOffer().get(0).getOfferListing().get(0).getAmountSaved().getFormattedPrice());
                System.out.println("Image - " + item1.getOffers().getOffer().get(0).getOfferListing().get(0).getPrice().getFormattedPrice());
                System.out.println("Image - " + item1.getOffers().getOffer().get(0).getOfferListing().get(0).getPercentageSaved());
*/
                    products.add(product);

                }
            }
        }
        return products;
    }


    public List<PTelevision> getSnapdealAndInfibeamResults() throws FileNotFoundException {

        List<PTelevision> productList = new ArrayList<PTelevision>();

        HeaderColumnNameTranslateMappingStrategy<PTelevision> beanStrategys = new HeaderColumnNameTranslateMappingStrategy<PTelevision>();
        beanStrategys.setType(PTelevision.class);

        Map<String, String> columnMappings = new HashMap<String, String>();
        columnMappings.put("title", "productName");
        columnMappings.put("offer_price", "salePrice");
        columnMappings.put("link", "productURL");
        columnMappings.put("image_link", "mediumImage");
        columnMappings.put("brand", "brand");

        beanStrategys.setColumnMapping(columnMappings);

        CsvToBean<PTelevision> csvToBeans = new CsvToBean<PTelevision>();
        CSVReader readers = new CSVReader(new FileReader("C:\\pingleCSV\\Televisions\\SnapdealTV.csv"));
        List<PTelevision> empss = csvToBeans.parse(beanStrategys, readers);
        System.out.println("omg list size = " + empss.size());
        for (PTelevision product : empss) {
            // System.out.println("Name - " + product.getProductName() + "Price - " + product.getSalePrice() + " - color - " + product.getColor());
            List<String> items = Arrays.asList(product.getMediumImage().split("\\s*,\\s*"));
            product.setMediumImage(items.get(0));
            if (product.getProductURL().contains("snapdeal.com")) {
                product.setMerchant("Snapdeal");
            }
            productList.add(product);
        }

     /*   HeaderColumnNameTranslateMappingStrategy<PTelevision> beanStrategy2 = new HeaderColumnNameTranslateMappingStrategy<PTelevision>();
        beanStrategy2.setType(PTelevision.class);

        Map<String, String> columnMapping2 = new HashMap<String, String>();
        columnMapping2.put("Title", "productName");
        columnMapping2.put("OurPrice", "salePrice");
        columnMapping2.put("URL", "productURL");
        columnMapping2.put("ImageURL", "mediumImage");
        columnMapping2.put("Make", "brand");
        columnMapping2.put("Attribute", "color");
        columnMapping2.put("SubCategory", "category");
        columnMapping2.put("ListingId", "productId");
        columnMapping2.put("BasePrice", "productPrice");
        columnMapping2.put("Discount", "discountDesc");
        // columnMapping2.put("Offer", "couponCode");


        beanStrategy2.setColumnMapping(columnMapping2);

        CsvToBean<PTelevision> csvToBean2 = new CsvToBean<PTelevision>();
        CSVReader reader2 = new CSVReader(new FileReader("C:\\pingleCSV\\InfibeamMobilesFeed.csv"));
        List<PTelevision> emps2 = csvToBean2.parse(beanStrategy2, reader2);
        System.out.println("omg list size = " + emps2.size());
        for (PTelevision product : emps2) {
            // System.out.println("Name - " + product.getProductName() + "Price - " + product.getSalePrice() + " - color - " + product.getColor());
            List<String> items2 = Arrays.asList(product.getMediumImage().split("\\s*,\\s*"));
            product.setMediumImage(items2.get(0));
            if (product.getProductURL().contains("infibeam.com")) {
                product.setMerchant("InfiBeam");
                product.setProductURL(product.getProductURL() + "?trackId=naveen");
            }


            productList.add(product);
        }*/

        return productList;
    }

}
