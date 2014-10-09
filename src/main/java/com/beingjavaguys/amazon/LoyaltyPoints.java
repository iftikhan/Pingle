
package com.beingjavaguys.amazon;

import javax.xml.bind.annotation.*;
import java.math.BigInteger;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Points" type="{http://www.w3.org/2001/XMLSchema}nonNegativeInteger" minOccurs="0"/>
 *         &lt;element name="TypicalRedemptionValue" type="{http://webservices.amazon.com/AWSECommerceService/2011-08-01}Price" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "points",
    "typicalRedemptionValue"
})
@XmlRootElement(name = "LoyaltyPoints")
public class LoyaltyPoints {

    @XmlElement(name = "Points")
    @XmlSchemaType(name = "nonNegativeInteger")
    protected BigInteger points;
    @XmlElement(name = "TypicalRedemptionValue")
    protected Price typicalRedemptionValue;

    /**
     * Gets the value of the points property.
     * 
     * @return
     *     possible object is
     *     {@link java.math.BigInteger }
     *
     */
    public BigInteger getPoints() {
        return points;
    }

    /**
     * Sets the value of the points property.
     *
     * @param value
     *     allowed object is
     *     {@link java.math.BigInteger }
     *     
     */
    public void setPoints(BigInteger value) {
        this.points = value;
    }

    /**
     * Gets the value of the typicalRedemptionValue property.
     * 
     * @return
     *     possible object is
     *     {@link Price }
     *     
     */
    public Price getTypicalRedemptionValue() {
        return typicalRedemptionValue;
    }

    /**
     * Sets the value of the typicalRedemptionValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link Price }
     *     
     */
    public void setTypicalRedemptionValue(Price value) {
        this.typicalRedemptionValue = value;
    }

}
