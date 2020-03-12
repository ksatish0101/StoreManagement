package com.CRUDApp.store.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Store {
	@Id
	@GeneratedValue
	private Long id;
	private String type;
	private String name;
	private String address;
	private String city;
	private String state;
	private String zip;


	public Store() {

	}

	public Store(Long id, String type, String name, String address, String city, String state, String zip) {
		this.id = id;
		this.type = type;
		this.name = name;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	@Override
	public String toString() {
		return "Store{" +
				"id=" + id +
				", type='" + type + '\'' +
				", name='" + name + '\'' +
				", address='" + address + '\'' +
				", city='" + city + '\'' +
				", state='" + state + '\'' +
				", zip='" + zip + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof Store)) return false;
		Store store = (Store) o;
		return getId().equals(store.getId()) &&
				Objects.equals(getType(), store.getType()) &&
				Objects.equals(getName(), store.getName()) &&
				Objects.equals(getAddress(), store.getAddress()) &&
				Objects.equals(getCity(), store.getCity()) &&
				Objects.equals(getState(), store.getState()) &&
				Objects.equals(getZip(), store.getZip());
	}

	@Override
	public int hashCode() {
		return Objects.hash(getId(), getType(), getName(), getAddress(), getCity(), getState(), getZip());
	}
}