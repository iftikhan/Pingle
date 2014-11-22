package com.beingjavaguys.controller;

import com.beingjavaguys.model.Brand;
import com.beingjavaguys.model.PMenClothing;
import com.beingjavaguys.services.DataServices;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.*;

/**
 * Created with IntelliJ IDEA.
 * User: nvyas
 * Date: 10/7/14
 * Time: 9:54 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/Men")
public class MenClothingController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(WomenClothingController.class);

    @RequestMapping(value = "/brands/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMenBrands(@PathVariable("category") String category) {
        System.out.println("Category is :: " + category);
        String result = "";
        try {
            Set<String> finalBrandlist = dataServices.getAllWomenBrandList(category);
            List<Brand> brnBrand = new ArrayList<Brand>();
            for (String brand1 : finalBrandlist) {
                Brand brand11 = new Brand();
                brand11.setBrand(brand1);
                brnBrand.add(brand11);

            }
            Gson gson = new Gson();
            result = gson.toJson(brnBrand);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping(value = "/color/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMenColor(@PathVariable("category") String category) {
        System.out.println("Category is :: " + category);
        String result = "";
        try {
            Set<String> finalBrandlist = dataServices.getAllWomenColorList(category);
            List<Brand> brnBrand = new ArrayList<Brand>();
            for (String brand1 : finalBrandlist) {
                Brand brand11 = new Brand();
                brand11.setColor(brand1);
                brnBrand.add(brand11);

            }
            Gson gson = new Gson();
            result = gson.toJson(brnBrand);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping(value = "/selectionclothing/{brand}/{color}/{price}/{categoryItem}/{order}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllSelectClothing(@PathVariable("brand") String brand, @PathVariable("color") String color, @PathVariable("price") String price,
                                @PathVariable("categoryItem") String categoryItem, @PathVariable("order") String order) {
        System.out.println("Selection input is #### : " + brand + " - " + color + " - " + price + " - " + categoryItem);
        String result = "";

        int maxPrice = 0;
        int minPrice = 0;

        if (price.equalsIgnoreCase("Rs. 1000 and below")) {
            maxPrice = 1000;
            minPrice = 1;
        } else if (price.equalsIgnoreCase("Rs 1001 - 3000")) {
            maxPrice = 3000;
            minPrice = 1001;
        } else if (price.equalsIgnoreCase("Rs 3001 - 5000")) {
            maxPrice = 5000;
            minPrice = 3001;
        } else if (price.equalsIgnoreCase("Rs 5001 - 7000")) {
            maxPrice = 7000;
            minPrice = 5001;
        } else if (price.equalsIgnoreCase("Rs 7001 and above")) {
            maxPrice = 50000;
            minPrice = 7001;
        } else if (price.equalsIgnoreCase("0")) {
            maxPrice = 50000;
            minPrice = 1;
        }


        if (brand.equalsIgnoreCase("0")) {
            brand = "All";
        }

        if (color.equalsIgnoreCase("0")) {
            color = "All";
        }

        try {
            Map map = dataServices.getAllMenSelectClothingList(brand, color, maxPrice, minPrice, categoryItem, order);

            int TotalResult = (Integer)map.get("TotalResult");
            List<PMenClothing> finalBrandlist = (List<PMenClothing>)map.get("List");

            if (categoryItem.equalsIgnoreCase("Dress")) {
                for (Iterator<PMenClothing> iter = finalBrandlist.iterator(); iter.hasNext(); ) {
                    PMenClothing p = iter.next();

                    if (p.getProductName().toLowerCase().contains("dress") && (p.getProductName().toLowerCase().contains("top") ||
                            (p.getProductName().toLowerCase().contains("playsuit") ||
                                    p.getProductName().toLowerCase().contains("nightdress")
                                    || p.getProductName().toLowerCase().contains("jumpsuit") || p.getProductName().toLowerCase().contains("material")
                                    || p.getProductName().toLowerCase().contains("shirt") || p.getProductName().toLowerCase().contains("tregging")
                                    || p.getProductName().toLowerCase().contains("short") || p.getProductName().toLowerCase().contains("trouser")
                                    || p.getProductName().toLowerCase().contains("legging")
                                    || p.getProductName().toLowerCase().contains("jacket")
                                    || p.getProductName().toLowerCase().contains("sweater")
                                    || p.getProductName().toLowerCase().contains("cardigan")
                                    || p.getProductName().toLowerCase().contains("tunic")
                                    || p.getProductName().toLowerCase().contains("jegging")
                            ))){
                        iter.remove();
                    } else


                    if (!p.getProductName().toLowerCase().contains("dress") && (p.getProductName().toLowerCase().contains("playsuit") ||
                            p.getProductName().toLowerCase().contains("nightdress")
                            || p.getProductName().toLowerCase().contains("jumpsuit") || p.getProductName().toLowerCase().contains("material")
                            || p.getProductName().toLowerCase().contains("top"))) {
                        iter.remove();
                    }
                }
            }

            map.clear();
            map.put("TotalResult",TotalResult);
            map.put("List",finalBrandlist);
            Gson gson = new Gson();
            result = gson.toJson(map);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "["+result+"]";
    }


    @RequestMapping(value = "/allresults/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllMenClothsForCat(@PathVariable("category") String category) {

        String result = "";
        try {
           Map map =  dataServices.getMenClothingForCatList(category);

            int TotalResult = (Integer)map.get("TotalResult");
            List<PMenClothing> finalBrandlist = (List<PMenClothing>)map.get("List");

            if (category.equalsIgnoreCase("Dress")) {
                for (Iterator<PMenClothing> iter = finalBrandlist.iterator(); iter.hasNext(); ) {
                    PMenClothing p = iter.next();

                    if (p.getProductName().toLowerCase().contains("dress") && (p.getProductName().toLowerCase().contains("top") ||
                            (p.getProductName().toLowerCase().contains("playsuit") ||
                                    p.getProductName().toLowerCase().contains("nightdress")
                                    || p.getProductName().toLowerCase().contains("jumpsuit") || p.getProductName().toLowerCase().contains("material")
                                    || p.getProductName().toLowerCase().contains("shirt") || p.getProductName().toLowerCase().contains("tregging")
                                    || p.getProductName().toLowerCase().contains("short") || p.getProductName().toLowerCase().contains("trouser")
                                    || p.getProductName().toLowerCase().contains("legging")
                                    || p.getProductName().toLowerCase().contains("jacket")
                                    || p.getProductName().toLowerCase().contains("sweater")
                                    || p.getProductName().toLowerCase().contains("cardigan")
                                    || p.getProductName().toLowerCase().contains("tunic")
                                    || p.getProductName().toLowerCase().contains("jegging")
                            ))){
                        iter.remove();
                    } else


                    if (!p.getProductName().toLowerCase().contains("dress") && (p.getProductName().toLowerCase().contains("playsuit") ||
                            p.getProductName().toLowerCase().contains("nightdress")
                            || p.getProductName().toLowerCase().contains("jumpsuit") || p.getProductName().toLowerCase().contains("material")
                            || p.getProductName().toLowerCase().contains("top"))) {
                        iter.remove();
                    }
                }
            }

            System.out.println("Size is for finalBrandlist :: " + finalBrandlist.size());


            map.clear();
            map.put("TotalResult",TotalResult);
            map.put("List",finalBrandlist);

            Gson gson = new Gson();
            result = gson.toJson(map);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "["+result+"]";
    }


    @RequestMapping(value = "/compare/{productName}/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String compareProduct(@PathVariable("productName") String productName, @PathVariable("category") String category) {
        System.out.println("compare for productName is :: " + productName);
        String result = "";
        try {

            Map map =  dataServices.getMenClothingForCatList(category);
            int TotalResult = (Integer)map.get("TotalResult");
            List<PMenClothing> pMenClothings = (List<PMenClothing>)map.get("List");


            StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);
            // 1. create the index
            Directory index = new RAMDirectory();

            IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

            IndexWriter w = new IndexWriter(index, config);
            for (PMenClothing product : pMenClothings) {
                addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(),
                        product.getMediumImage());
            }
            w.close();

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
            Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(querystr);
            int hitsPerPage = 10000;
            IndexReader reader11 = DirectoryReader.open(index);
            IndexSearcher searcher = new IndexSearcher(reader11);
            TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
            searcher.search(q, collector);
            ScoreDoc[] hits = collector.topDocs().scoreDocs;

            List<PMenClothing> productList1 = new ArrayList<PMenClothing>();

            //  System.out.println("productList before searching = " + productList.size());
            //  System.out.println("Found " + hits.length + " hits.");
            for (int i = 0; i < hits.length; ++i) {
                int docId = hits[i].doc;
                PMenClothing product45 = new PMenClothing();
                Document d = searcher.doc(docId);
                System.out.println((i + 1) + ". " + d.get("isbn") + "\t" + d.get("title") + "\t" + d.get("merchant"));


                product45.setProductName(d.get("title"));
                product45.setSalePrice(Integer.parseInt(d.get("isbn").replaceAll("[^\\d.]", "")));
                product45.setMerchant(d.get("merchant"));
                product45.setProductURL(d.get("URL"));
                product45.setMediumImage(d.get("image"));

                productList1.add(product45);
            }

            Gson gson = new Gson();
            result = gson.toJson(productList1.subList(0, 3));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    private static void addDoc(IndexWriter w, String title, int isbn, String merchant, String prodURL, String productImage) throws IOException {
        Document doc = new Document();
        doc.add(new TextField("title", title, Field.Store.YES));

        if (merchant == null) {
            merchant = "Other";
        }
        // use a string field for isbn because we don't want it tokenized
        doc.add(new IntField("isbn", isbn, Field.Store.YES));
        doc.add(new StringField("merchant", merchant, Field.Store.YES));
        doc.add(new StringField("URL", prodURL, Field.Store.YES));
        doc.add(new StringField("image", productImage, Field.Store.YES));
        w.addDocument(doc);
    }


}
