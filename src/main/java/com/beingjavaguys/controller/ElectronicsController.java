package com.beingjavaguys.controller;

import com.beingjavaguys.model.Brand;
import com.beingjavaguys.model.PElectronics;
import com.beingjavaguys.services.DataServices;
import com.google.gson.Gson;
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
@RequestMapping("/elect")
public class ElectronicsController {

    @Autowired
    DataServices dataServices;

    static final Logger logger = Logger.getLogger(ElectronicsController.class);

    @RequestMapping(value = "/brands/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllPElectronicsBrands(@PathVariable("category") String category) {
        System.out.println("Category is :: " + category);
        String result = "";
        try {
            Set<String> finalBrandlist = dataServices.getAllElectronicsBrandList(category);
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
    String getAllPElectronicsColor(@PathVariable("category") String category) {
        System.out.println("Category is :: " + category);
        String result = "";
        try {
            Set<String> finalBrandlist = dataServices.getAllElectronicsColorList(category);
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

    @RequestMapping(value = "/selection/{brand}/{color}/{price}/{categoryItem}/{order}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllSelect(@PathVariable("brand") String brand, @PathVariable("color") String color, @PathVariable("price") String price,
                        @PathVariable("categoryItem") String categoryItem,  @PathVariable("order") String order) {
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
        } else if (price.equalsIgnoreCase("Rs 7001 - 10000")) {
            maxPrice = 10000;
            minPrice = 7001;
        } else if (price.equalsIgnoreCase("Rs 10001 - 20000")) {
            maxPrice = 20000;
            minPrice = 10001;
        } else if (price.equalsIgnoreCase("Rs 20001 - 30000")) {
            maxPrice = 30000;
            minPrice = 20001;
        } else if (price.equalsIgnoreCase("0")) {
            maxPrice = 200000;
            minPrice = 1;
        }



        if (brand.equalsIgnoreCase("0")) {
            brand = " ";
        }

        if (color.equalsIgnoreCase("0")) {
            color = " ";
        }

        try {
            List<PElectronics> finalProd = dataServices.getAllElectronicsList(brand, color, maxPrice, minPrice, categoryItem, order);
            StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);
            // 1. create the index
            Directory index = new RAMDirectory();

            IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

            IndexWriter w = new IndexWriter(index, config);
            for (PElectronics product : finalProd) {
                addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(),
                        product.getMediumImage());
            }
            w.close();

            String query = "+"+brand + " +" + color + " +" + categoryItem;

            List<String> myList = new ArrayList<String>(Arrays.asList(categoryItem.split(" ")));
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
                sb.append("+");
            }

            String querystr = sb.toString();
            System.out.println("query string = " + query);
            Query q = new QueryParser(Version.LUCENE_40, "title", analyzer).parse(query);
            int hitsPerPage = 10000;
            IndexReader reader11 = DirectoryReader.open(index);
            IndexSearcher searcher = new IndexSearcher(reader11);
            TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage, true);
            searcher.search(q, collector);
            ScoreDoc[] hits = collector.topDocs().scoreDocs;

            List<PElectronics> productList1 = new ArrayList<PElectronics>();

            //  System.out.println("productList before searching = " + productList.size());
            //  System.out.println("Found " + hits.length + " hits.");
            for (int i = 0; i < hits.length; ++i) {
                int docId = hits[i].doc;
                PElectronics product45 = new PElectronics();
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
            result = gson.toJson(productList1);

            System.out.println("Size is for finalBrandlist :: " + finalProd.size());
            /*Gson gson = new Gson();
            result = gson.toJson(finalProd);*/
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


    @RequestMapping(value = "/allresults/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String getAllPElectronicsClothsForCat(@PathVariable("category") String category) {

        String result = "";
        try {
            List<PElectronics> finalBrandlist = dataServices.getElectronicsForCatList(category);

            if (category.equalsIgnoreCase("LED") || category.equalsIgnoreCase("LCD") || category.equalsIgnoreCase("Plasma") ) {
                for (Iterator<PElectronics> iter = finalBrandlist.iterator(); iter.hasNext(); ) {
                    PElectronics p = iter.next();
                    if (!p.getProductName().toLowerCase().contains("television") && !p.getProductName().toLowerCase().contains("tv")) {
                        iter.remove();
                    }
                }
            }

            StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);
            // 1. create the index
            Directory index = new RAMDirectory();

            IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

            IndexWriter w = new IndexWriter(index, config);
            for (PElectronics product : finalBrandlist) {
                addDoc(w, product.getProductName(), product.getSalePrice(), product.getMerchant(), product.getProductURL(),
                        product.getMediumImage());
            }
            w.close();

            List<String> myList = new ArrayList<String>(Arrays.asList(category.split(" ")));
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
                sb.append(" ");
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

            List<PElectronics> productList1 = new ArrayList<PElectronics>();

            //  System.out.println("productList before searching = " + productList.size());
            //  System.out.println("Found " + hits.length + " hits.");
            for (int i = 0; i < hits.length; ++i) {
                int docId = hits[i].doc;
                PElectronics product45 = new PElectronics();
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
            result = gson.toJson(productList1);

            System.out.println("Size is for finalBrandlist :: " + finalBrandlist.size());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


    @RequestMapping(value = "/compare/{productName}/{category}", method = RequestMethod.GET)
    public
    @ResponseBody
    String compareProduct(@PathVariable("productName") String productName, @PathVariable("category") String category) {
        System.out.println("compare for productName is :: " + productName);
        String result = "";
        try {
            List<PElectronics> PElectronicss = dataServices.getElectronicsForCatList(category);

            StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_40);
            // 1. create the index
            Directory index = new RAMDirectory();

            IndexWriterConfig config = new IndexWriterConfig(Version.LUCENE_40, analyzer);

            IndexWriter w = new IndexWriter(index, config);
            for (PElectronics product : PElectronicss) {
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

            List<PElectronics> productList1 = new ArrayList<PElectronics>();

            //  System.out.println("productList before searching = " + productList.size());
            //  System.out.println("Found " + hits.length + " hits.");
            for (int i = 0; i < hits.length; ++i) {
                int docId = hits[i].doc;
                PElectronics product45 = new PElectronics();
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
