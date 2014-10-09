package com.beingjavaguys.test;

import com.beingjavaguys.model.PLaptop;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 10/1/14
 * Time: 3:08 PM
 * To change this template use File | Settings | File Templates.
 */
public class Test {

    public static void main(String args[]) throws JSONException, IOException {

        List<PLaptop> finalList = new ArrayList<>();
        Test test = new Test();
        JSONObject jsonObject = null;
        String str = "http://feeds.omgeu.com/data/feed.aspx?hash=06bcc08c98a0471e96ec55b8de773962" + "&page=1";
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
        int totalRecords = Integer.parseInt(String.valueOf(productFeed.get("TotalRecordsAvailable")));

        for (int i = 1; i < 10; i++) {
            List<PLaptop> list = new ArrayList<>();

            if (finalList.size() >= totalRecords) {
                break;
            }

            list = test.omgMobileData(i);
            System.out.println("Size : " + list.size());

            finalList.addAll(list);


        }

        System.out.println("finalList Size : " + finalList.size());

    }

    public List<PLaptop> omgMobileData(int pageNo) throws IOException, JSONException, org.json.JSONException {

        List<PLaptop> productList = new ArrayList<PLaptop>();
        JSONObject jsonObject = null;
        String str = "http://feeds.omgeu.com/data/feed.aspx?hash=06bcc08c98a0471e96ec55b8de773962" + "&page="+pageNo;
        System.out.println("feed url is : " + str);
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
        System.out.println("productFeed " + productFeed.get("TotalRecordsAvailable"));
        JSONObject products = productFeed.getJSONObject("Products");
        JSONArray productList1 = products.getJSONArray("Product");


        for (int i = 0; i < productList1.length(); i++) {

            PLaptop pinfo = new PLaptop();

            JSONObject productAttributes = productList1.getJSONObject(i).getJSONObject("Attributes");
            Object prodAttr = productAttributes.get("Attribute");

            JSONObject categories = productList1.getJSONObject(i).getJSONObject("Categories");
            JSONObject category = categories.getJSONObject("Category");

            pinfo.setCategory(category.getString("Name"));

            if (prodAttr instanceof JSONArray) {

                for (int j = 0; j < ((JSONArray) prodAttr).length(); j++) {
                    pinfo.setProductName(productList1.getJSONObject(i).getString("Name"));
                    pinfo.setSalePrice(productList1.getJSONObject(i).getInt("Price"));
                    pinfo.setProductDesc(productList1.getJSONObject(i).getString("Description"));
                    pinfo.setMediumImage(productList1.getJSONObject(i).getString("MediumImage"));
                    pinfo.setLargeImage(productList1.getJSONObject(i).getString("LargeImage"));
                    pinfo.setProductURL(productList1.getJSONObject(i).getString("URL"));
                    pinfo.setMerchant(productList1.getJSONObject(i).getString("Merchant"));
                    // pinfo.setBrand(String.valueOf((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Brand")) ? ((JSONArray) prodAttr).getJSONObject(j).get("Value") : ""));

                    if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Brand"))) {
                        System.out.println(" Brand Value ^^^^^^^ " + ((JSONArray) prodAttr).getJSONObject(j).get("Value"));
                        pinfo.setBrand(String.valueOf(((JSONArray) prodAttr).getJSONObject(j).get("Value")));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Coupon Code"))) {
                        pinfo.setCouponCode(((JSONArray) prodAttr).getJSONObject(j).getString("Value"));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Brand"))) {
                        pinfo.setBrand(String.valueOf(((JSONArray) prodAttr).getJSONObject(j).get("Value")));
                    } else if ((((JSONArray) prodAttr).getJSONObject(j).getString("Name").equalsIgnoreCase("Discount Amount"))) {
                        pinfo.setDiscountAmount(String.valueOf(((JSONArray) prodAttr).getJSONObject(j).get("Value")));
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
}
