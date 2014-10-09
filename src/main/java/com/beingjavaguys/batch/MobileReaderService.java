package com.beingjavaguys.batch;

import com.beingjavaguys.model.PMobile;
import com.beingjavaguys.model.Status;
import com.beingjavaguys.services.DataServices;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 9/23/14
 * Time: 7:41 PM
 * To change this template use File | Settings | File Templates.
 */
public class MobileReaderService {

    @Autowired
    DataServices dataServices;

    public Status addPMobileProduct() throws JSONException, IOException {

        System.out.println("Calling omgMobileData Services");

        List<PMobile> omgMobileDataList = omgMobileData();

        System.out.println("omgMobileDataList size : " + omgMobileDataList.size());

        for (PMobile product : omgMobileDataList) {
            try {
                dataServices.addPMobileEntity(product);
                return new Status(1, "Mobile Product added Successfully !");
            } catch (Exception e) {
                // e.printStackTrace();
                return new Status(0, e.toString());
            }
        }

        return new Status(1, "Mobile Product added Successfully !");
    }

    public List<PMobile> omgMobileData() throws IOException, JSONException, org.json.JSONException {

        JSONObject jsonObject = null;
        String str = "http://feeds.omgeu.com/data/feed.aspx?hash=1851a0ac81bd4744b7d01940d9430cd0" + "&page=1";
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


        List<PMobile> productList = null;
        for (int i = 0; i < productList1.length(); i++) {

            PMobile pinfo = new PMobile();

            JSONObject productAttributes = productList1.getJSONObject(i).getJSONObject("Attributes");
            Object prodAttr = productAttributes.get("Attribute");

            JSONObject categories = productList1.getJSONObject(i).getJSONObject("Categories");
            Object category = categories.get("Category");

            pinfo.setCategory("Mobile");

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

            productList = new ArrayList<PMobile>();
            productList.add(pinfo);

        }

        return productList;
    }

    public static void main(String args[]) throws IOException, JSONException {
        MobileReaderService mobileReaderService = new MobileReaderService();
        mobileReaderService.addPMobileProduct();
    }

}
