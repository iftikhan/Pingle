package com.beingjavaguys.dao;

import com.beingjavaguys.misc.PConstants;
import com.beingjavaguys.model.*;
import com.beingjavaguys.vo.Product;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class DataDaoImpl implements DataDao {

    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    @Override
    public boolean addEntity(Employee employee) throws Exception {

        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(employee);
        tx.commit();
        session.close();

        return false;
    }

    @Override
    public Employee getEntityById(long id) throws Exception {
        session = sessionFactory.openSession();
        Employee employee = (Employee) session.load(Employee.class,
                new Long(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return employee;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Employee> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Employee> employeeList = session.createCriteria(Employee.class)
                .list();
        tx.commit();
        session.close();
        return employeeList;
    }

    @Override
    public boolean deleteEntity(long id)
            throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Employee.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    @Override
    public boolean addPMobileEntity(PMobile pMobile) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(pMobile);
        tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addUser(PUser pUser) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(pUser);
        tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addPWatchEntity(PWatch pWatch) throws Exception {
        System.out.println("Mobile Product added Successfully ! Pwatch");
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(pWatch);
        tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addPLaptopEntity(PLaptop pLaptop) throws Exception {
        System.out.println("Laptop Product added Successfully ! pLaptop");
        session = sessionFactory.openSession();
        //  tx = session.beginTransaction();
        session.save(pLaptop);
        // tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addPTelevisionEntity(PTelevision pTelevision) throws Exception {
        System.out.println("pTelevision Product added Successfully ! pTelevision");
        session = sessionFactory.openSession();
        //  tx = session.beginTransaction();
        session.save(pTelevision);
        // tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addPCameraEntity(PCamera pCamera) throws Exception {
        System.out.println("pCamera Product added Successfully ! pCamera");
        session = sessionFactory.openSession();
        //  tx = session.beginTransaction();
        session.save(pCamera);
        // tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addPTshirtEntity(PTshirt pTshirt) throws Exception {
        System.out.println("pTshirt Product added Successfully ! pTshirt");
        session = sessionFactory.openSession();
        //  tx = session.beginTransaction();
        session.save(pTshirt);
        // tx.commit();
        session.close();

        return false;
    }


    @Override
    public boolean addPShoesEntity(PShoes pShoes) throws Exception {
        System.out.println("pShoes Product added Successfully ! pShoes");
        session = sessionFactory.openSession();
        //  tx = session.beginTransaction();
        session.save(pShoes);
        // tx.commit();
        session.close();

        return false;
    }

    @Override
    public boolean addPWomenClothingEntity(PWomenClothing pWomenClothing) throws Exception {
        System.out.println("pWomenClothing Product added Successfully ! pWomenClothing");
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(pWomenClothing);
        tx.commit();
        session.close();
        return false;
    }

    @Override
    public boolean addPMenClothingEntity(PMenClothing pMenClothing) throws Exception {
        System.out.println("addPMenClothingEntity Product added Successfully ! addPMenClothingEntity");
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(pMenClothing);
        tx.commit();
        session.close();
        return false;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PMobile> getAllMobileList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PMobile.class);
        c.addOrder(Order.asc("salePrice"));
        List<PMobile> pMobileList = c.list();

        //  tx.commit();
        //  session.close();
        return pMobileList;
    }


    @SuppressWarnings("unchecked")
    @Override
    public Set<String> getAllWomenBrandList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        System.out.println("Dao Category is :: " + category);
        Criteria c = session.createCriteria(PWomenClothing.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.setMaxResults(PConstants.MaxListSize);
        List<PWomenClothing> pWomenClothings = c.list();
        System.out.println("Size is for Dress :: " + pWomenClothings.size());
        Set<String> brandSet = new TreeSet<>();
        for (PWomenClothing pWomenClothing : pWomenClothings) {
            if (pWomenClothing.getBrand() != null) {
                brandSet.add(pWomenClothing.getBrand());
            } else {
                brandSet.add("Others");
            }

        }


        return brandSet;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Set<String> getAllWomenColorList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        System.out.println("Dao Category is :: " + category);
        Criteria c = session.createCriteria(PWomenClothing.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.setMaxResults(PConstants.MaxListSize);
        List<PWomenClothing> pWomenClothings = c.list();
        System.out.println("Size is for Dress :: " + pWomenClothings.size());
        Set<String> brandSet = new TreeSet<>();
        for (PWomenClothing pWomenClothing : pWomenClothings) {
            if (pWomenClothing.getColor() != null) {
                brandSet.add(pWomenClothing.getColor());
            } else {
                brandSet.add("Others");
            }
        }

        if (brandSet.size() < 2) {
            brandSet.add("White");
            brandSet.add("Pink");
            brandSet.add("Blue");
            brandSet.add("Yellow");
            brandSet.add("Red");
            brandSet.add("Green");

        }

        return brandSet;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PWomenClothing> getWomenClothingForCatList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PWomenClothing.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.add(Restrictions.like("productName", "%" + category + "%"));

        Criterion productName = Restrictions.like("productName", "%" + category + "%");
        Criterion category1 = Restrictions.like("category", "%" + category + "%");
        c.setMaxResults(PConstants.MaxListSize);


        LogicalExpression andExp = Restrictions.and(productName, category1);
        c.add(andExp);

        List<PWomenClothing> pWomenClothings = c.list();
        System.out.println("Size is for getWomenClothingForCatList :: " + pWomenClothings.size());
        return pWomenClothings;
    }


    @SuppressWarnings("unchecked")
    @Override
    public Set<String> getAllMenBrandList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        System.out.println("Dao Category is :: " + category);
        Criteria c = session.createCriteria(PMenClothing.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        List<PMenClothing> pMenClothings = c.list();
        System.out.println("Size is for Dress :: " + pMenClothings.size());
        Set<String> brandSet = new TreeSet<>();
        for (PMenClothing pMenClothing : pMenClothings) {
            if (pMenClothing.getBrand() != null) {
                brandSet.add(pMenClothing.getBrand());
            } else {
                brandSet.add("Others");
            }

        }


        return brandSet;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Set<String> getAllMenColorList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        System.out.println("Dao Category is :: " + category);
        Criteria c = session.createCriteria(PMenClothing.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        List<PMenClothing> pMenClothings = c.list();
        System.out.println("Size is for Dress :: " + pMenClothings.size());
        Set<String> brandSet = new TreeSet<>();
        for (PMenClothing pMenClothing : pMenClothings) {
            if (pMenClothing.getColor() != null) {
                brandSet.add(pMenClothing.getColor());
            } else {
                brandSet.add("Others");
            }
        }

        if (brandSet.size() < 2) {
            brandSet.add("White");
            brandSet.add("Pink");
            brandSet.add("Blue");
            brandSet.add("Yellow");
            brandSet.add("Red");
            brandSet.add("Green");

        }

        return brandSet;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PMenClothing> getMenClothingForCatList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PMenClothing.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.add(Restrictions.like("productName", "%" + category + "%"));

        Criterion productName = Restrictions.like("productName", "%" + category + "%");
        Criterion category1 = Restrictions.like("category", "%" + category + "%");


        LogicalExpression orExp = Restrictions.or(productName, category1);
        c.add(orExp);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        List<PMenClothing> pMenClothings = c.list();
        System.out.println("Size is for getMenClothingForCatList :: " + pMenClothings.size());
        return pMenClothings;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Set<String> getAllWatchBrandList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        System.out.println("Dao Category is :: " + category);
        Criteria c = session.createCriteria(PWatch.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.setMaxResults(PConstants.MaxListSize);
        List<PWatch> pWatches = c.list();
        System.out.println("Size is for Dress :: " + pWatches.size());
        Set<String> brandSet = new TreeSet<>();
        for (PWatch pWatch : pWatches) {
            if (pWatch.getBrand() != null) {
                brandSet.add(pWatch.getBrand());
            } else {
                brandSet.add("Others");
            }

        }


        return brandSet;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Set<String> getAllWatchColorList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        System.out.println("Dao Category is :: " + category);
        Criteria c = session.createCriteria(PWatch.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.setMaxResults(PConstants.MaxListSize);
        List<PWatch> pWatches = c.list();
        System.out.println("Size is for Dress :: " + pWatches.size());
        Set<String> brandSet = new TreeSet<>();
        for (PWatch pWatches1 : pWatches) {
            if (pWatches1.getColor() != null) {
                brandSet.add(pWatches1.getColor());
            } else {
                brandSet.add("Others");
            }
        }

        if (brandSet.size() < 2) {
            brandSet.add("White");
            brandSet.add("Pink");
            brandSet.add("Blue");
            brandSet.add("Yellow");
            brandSet.add("Red");
            brandSet.add("Green");

        }

        return brandSet;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PWatch> getWatchForCatList(String category) throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PWatch.class);
        c.add(Restrictions.like("category", "%" + category + "%"));
        c.add(Restrictions.like("productName", "%" + category + "%"));

        Criterion productName = Restrictions.like("productName", "%" + category + "%");
        Criterion category1 = Restrictions.like("category", "%" + category + "%");


        LogicalExpression orExp = Restrictions.or(productName, category1);
        c.add(orExp);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        List<PWatch> pWatches = c.list();
        System.out.println("Size is for PWatch :: " + pWatches.size());
        return pWatches;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PMobile> getAllMobileBrandList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PMobile.class);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        //  tx.commit();
        // session.close();
        return c.list();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PWatch> getAllWatchBrandList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PWatch.class);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        //  tx.commit();
        // session.close();

        return c.list();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PWatch> getAllWatchList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PWatch.class);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        //  tx.commit();
        // session.close();

        return c.list();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PLaptop> getAllLaptopBrandList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PLaptop.class);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        //  tx.commit();
        // session.close();

        return c.list();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PLaptop> getAllLaptopList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PLaptop.class);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        //  tx.commit();
        // session.close();

        return c.list();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Product> getAllProductBrandList(String productType) throws Exception {

        session = sessionFactory.openSession();
        List<Product> productList = new ArrayList<>();
        Criteria c = null;
        if (productType.toLowerCase().equalsIgnoreCase("Camera")) {
            c = session.createCriteria(PCamera.class);
            if (c != null) {
                c.addOrder(Order.asc("salePrice"));
                for (Object object : c.list()) {
                    PCamera product = (PCamera) object;
                    Product product1 = new Product();
                    product1.setProductName(product.getProductName());
                    product1.setMediumImage(product.getMediumImage());
                    product1.setProductURL(product.getProductURL());
                    product1.setMerchant(product.getMerchant());
                    product1.setCouponCode(product.getCouponCode());
                    product1.setCouponDiscount(product.getCouponDiscount());
                    product1.setCategory(product.getCategory());
                    product1.setBrand(product.getBrand());
                    product1.setDiscountDesc(product.getDiscountDesc());
                    product1.setSalePrice(product.getSalePrice());
                    product1.setExpirationDate(product.getExpirationDate());
                    product1.setGender(product.getGender());
                    product1.setInStock(product.getInStock());
                    productList.add(product1);
                }
            }
        } else if (productType.toLowerCase().equalsIgnoreCase("mentshirt")) {
            c = session.createCriteria(PTshirt.class);
            if (c != null) {
                c.addOrder(Order.asc("salePrice"));
                for (Object object : c.list()) {
                    PTshirt product = (PTshirt) object;
                    Product product1 = new Product();
                    product1.setProductName(product.getProductName());
                    product1.setMediumImage(product.getMediumImage());
                    product1.setProductURL(product.getProductURL());
                    product1.setMerchant(product.getMerchant());
                    product1.setCouponCode(product.getCouponCode());
                    product1.setCouponDiscount(product.getCouponDiscount());
                    product1.setCategory(product.getCategory());
                    product1.setBrand(product.getBrand());
                    product1.setDiscountDesc(product.getDiscountDesc());
                    product1.setSalePrice(product.getSalePrice());
                    product1.setExpirationDate(product.getExpirationDate());
                    product1.setGender(product.getGender());
                    product1.setInStock(product.getInStock());
                    productList.add(product1);
                }
            }
        } else if (productType.toLowerCase().equalsIgnoreCase("menshoes")) {
            c = session.createCriteria(PShoes.class);
            if (c != null) {
                c.addOrder(Order.asc("salePrice"));
                for (Object object : c.list()) {
                    PShoes product = (PShoes) object;
                    Product product1 = new Product();
                    product1.setProductName(product.getProductName());
                    product1.setMediumImage(product.getMediumImage());
                    product1.setProductURL(product.getProductURL());
                    product1.setMerchant(product.getMerchant());
                    product1.setCouponCode(product.getCouponCode());
                    product1.setCouponDiscount(product.getCouponDiscount());
                    product1.setCategory(product.getCategory());
                    product1.setBrand(product.getBrand());
                    product1.setDiscountDesc(product.getDiscountDesc());
                    product1.setSalePrice(product.getSalePrice());
                    product1.setExpirationDate(product.getExpirationDate());
                    product1.setGender(product.getGender());
                    product1.setInStock(product.getInStock());
                    productList.add(product1);
                }
            }
        }

        return productList;

    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Product> getAllProductList(String productType) throws Exception {
        session = sessionFactory.openSession();
        List<Product> productList = new ArrayList<>();
        Criteria c = null;
        if (productType.toLowerCase().equalsIgnoreCase("Camera")) {
            c = session.createCriteria(PCamera.class);
            if (c != null) {
                c.addOrder(Order.asc("salePrice"));
                for (Object object : c.list()) {
                    PCamera product = (PCamera) object;
                    Product product1 = new Product();
                    product1.setProductName(product.getProductName());
                    product1.setMediumImage(product.getMediumImage());
                    product1.setProductURL(product.getProductURL());
                    product1.setMerchant(product.getMerchant());
                    product1.setCouponCode(product.getCouponCode());
                    product1.setCouponDiscount(product.getCouponDiscount());
                    product1.setCategory(product.getCategory());
                    product1.setBrand(product.getBrand());
                    product1.setDiscountDesc(product.getDiscountDesc());
                    product1.setSalePrice(product.getSalePrice());
                    product1.setExpirationDate(product.getExpirationDate());
                    product1.setGender(product.getGender());
                    product1.setInStock(product.getInStock());
                    productList.add(product1);
                }
            }
        } else if (productType.toLowerCase().equalsIgnoreCase("mentshirt")) {
            c = session.createCriteria(PTshirt.class);
            if (c != null) {
                c.addOrder(Order.asc("salePrice"));
                for (Object object : c.list()) {
                    PTshirt product = (PTshirt) object;
                    Product product1 = new Product();
                    product1.setProductName(product.getProductName());
                    product1.setMediumImage(product.getMediumImage());
                    product1.setProductURL(product.getProductURL());
                    product1.setMerchant(product.getMerchant());
                    product1.setCouponCode(product.getCouponCode());
                    product1.setCouponDiscount(product.getCouponDiscount());
                    product1.setCategory(product.getCategory());
                    product1.setBrand(product.getBrand());
                    product1.setDiscountDesc(product.getDiscountDesc());
                    product1.setSalePrice(product.getSalePrice());
                    product1.setExpirationDate(product.getExpirationDate());
                    product1.setGender(product.getGender());
                    product1.setInStock(product.getInStock());
                    productList.add(product1);
                }
            }
        } else if (productType.toLowerCase().equalsIgnoreCase("menshoes")) {
            c = session.createCriteria(PShoes.class);
            if (c != null) {
                c.addOrder(Order.asc("salePrice"));
                for (Object object : c.list()) {
                    PShoes product = (PShoes) object;
                    Product product1 = new Product();
                    product1.setProductName(product.getProductName());
                    product1.setMediumImage(product.getMediumImage());
                    product1.setProductURL(product.getProductURL());
                    product1.setMerchant(product.getMerchant());
                    product1.setCouponCode(product.getCouponCode());
                    product1.setCouponDiscount(product.getCouponDiscount());
                    product1.setCategory(product.getCategory());
                    product1.setBrand(product.getBrand());
                    product1.setDiscountDesc(product.getDiscountDesc());
                    product1.setSalePrice(product.getSalePrice());
                    product1.setExpirationDate(product.getExpirationDate());
                    product1.setGender(product.getGender());
                    product1.setInStock(product.getInStock());
                    productList.add(product1);
                }
            }
        }

        return productList;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PTelevision> getAllTelevisionBrandList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PTelevision.class);
        c.addOrder(Order.asc("salePrice"));
        //  tx.commit();
        // session.close();

        return c.list();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PTelevision> getAllTelevisionList() throws Exception {
        session = sessionFactory.openSession();
        // tx = session.beginTransaction();
        Criteria c = session.createCriteria(PTelevision.class);
        c.addOrder(Order.asc("salePrice"));
        c.setMaxResults(PConstants.MaxListSize);
        //  tx.commit();
        // session.close();

        return c.list();
    }

}
