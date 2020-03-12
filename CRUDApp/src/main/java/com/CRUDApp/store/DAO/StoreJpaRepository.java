package com.CRUDApp.store.DAO;

import java.util.List;

import com.CRUDApp.store.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreJpaRepository extends JpaRepository<Store, Long>{
	List<Store> findByType(String Type);
}