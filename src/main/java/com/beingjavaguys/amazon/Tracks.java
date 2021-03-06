
package com.beingjavaguys.amazon;

import javax.xml.bind.annotation.*;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;


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
 *         &lt;element name="Disc" maxOccurs="unbounded">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="Track" maxOccurs="unbounded">
 *                     &lt;complexType>
 *                       &lt;simpleContent>
 *                         &lt;extension base="&lt;http://www.w3.org/2001/XMLSchema>string">
 *                           &lt;attribute name="Number" use="required" type="{http://www.w3.org/2001/XMLSchema}positiveInteger" />
 *                         &lt;/extension>
 *                       &lt;/simpleContent>
 *                     &lt;/complexType>
 *                   &lt;/element>
 *                 &lt;/sequence>
 *                 &lt;attribute name="Number" use="required" type="{http://www.w3.org/2001/XMLSchema}positiveInteger" />
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
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
    "disc"
})
@XmlRootElement(name = "Tracks")
public class Tracks {

    @XmlElement(name = "Disc", required = true)
    protected List<Disc> disc;

    /**
     * Gets the value of the disc property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the disc property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDisc().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Tracks.Disc }
     *
     *
     */
    public List<Disc> getDisc() {
        if (disc == null) {
            disc = new ArrayList<Disc>();
        }
        return this.disc;
    }


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
     *         &lt;element name="Track" maxOccurs="unbounded">
     *           &lt;complexType>
     *             &lt;simpleContent>
     *               &lt;extension base="&lt;http://www.w3.org/2001/XMLSchema>string">
     *                 &lt;attribute name="Number" use="required" type="{http://www.w3.org/2001/XMLSchema}positiveInteger" />
     *               &lt;/extension>
     *             &lt;/simpleContent>
     *           &lt;/complexType>
     *         &lt;/element>
     *       &lt;/sequence>
     *       &lt;attribute name="Number" use="required" type="{http://www.w3.org/2001/XMLSchema}positiveInteger" />
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     *
     *
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "track"
    })
    public static class Disc {

        @XmlElement(name = "Track", required = true)
        protected List<Track> track;
        @XmlAttribute(name = "Number", required = true)
        @XmlSchemaType(name = "positiveInteger")
        protected BigInteger number;

        /**
         * Gets the value of the track property.
         *
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the track property.
         *
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getTrack().add(newItem);
         * </pre>
         *
         *
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link Tracks.Disc.Track }
         *
         *
         */
        public List<Track> getTrack() {
            if (track == null) {
                track = new ArrayList<Track>();
            }
            return this.track;
        }

        /**
         * Gets the value of the number property.
         *
         * @return
         *     possible object is
         *     {@link java.math.BigInteger }
         *
         */
        public BigInteger getNumber() {
            return number;
        }

        /**
         * Sets the value of the number property.
         *
         * @param value
         *     allowed object is
         *     {@link java.math.BigInteger }
         *
         */
        public void setNumber(BigInteger value) {
            this.number = value;
        }


        /**
         * <p>Java class for anonymous complex type.
         *
         * <p>The following schema fragment specifies the expected content contained within this class.
         *
         * <pre>
         * &lt;complexType>
         *   &lt;simpleContent>
         *     &lt;extension base="&lt;http://www.w3.org/2001/XMLSchema>string">
         *       &lt;attribute name="Number" use="required" type="{http://www.w3.org/2001/XMLSchema}positiveInteger" />
         *     &lt;/extension>
         *   &lt;/simpleContent>
         * &lt;/complexType>
         * </pre>
         *
         *
         */
        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "value"
        })
        public static class Track {

            @XmlValue
            protected String value;
            @XmlAttribute(name = "Number", required = true)
            @XmlSchemaType(name = "positiveInteger")
            protected BigInteger number;

            /**
             * Gets the value of the value property.
             *
             * @return
             *     possible object is
             *     {@link String }
             *
             */
            public String getValue() {
                return value;
            }

            /**
             * Sets the value of the value property.
             *
             * @param value
             *     allowed object is
             *     {@link String }
             *
             */
            public void setValue(String value) {
                this.value = value;
            }

            /**
             * Gets the value of the number property.
             *
             * @return
             *     possible object is
             *     {@link java.math.BigInteger }
             *
             */
            public BigInteger getNumber() {
                return number;
            }

            /**
             * Sets the value of the number property.
             *
             * @param value
             *     allowed object is
             *     {@link java.math.BigInteger }
             *     
             */
            public void setNumber(BigInteger value) {
                this.number = value;
            }

        }

    }

}
