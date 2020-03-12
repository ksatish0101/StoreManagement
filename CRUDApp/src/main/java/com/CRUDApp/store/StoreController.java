package com.CRUDApp.store;

import java.net.URI;
import java.util.List;

import com.CRUDApp.store.DAO.StoreJpaRepository;
import com.CRUDApp.store.entity.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping(value = "/store", produces = { MediaType.APPLICATION_JSON_VALUE })
public class StoreController {

	@Autowired
	private StoreJpaRepository storeRepository;

	@GetMapping("/stores")
	public List<Store> getAllStores() {
		return storeRepository.findAll();
	}

	@GetMapping("/{id}")
	public Store getItem(@PathVariable long id) {
		return storeRepository.findById(id).orElseThrow(() -> new RuntimeException("Store Not Found with id " + id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable long id) {

		storeRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/{id}")
	public ResponseEntity<Store> updateItems(@PathVariable long id,
			@RequestBody Store store) {

		Store storeUpdated = storeRepository.save(store);

		return new ResponseEntity<Store>(storeUpdated, HttpStatus.OK);
	}

	@PostMapping("/new")
	public ResponseEntity<Void> createItems(@RequestBody Store store) {
		
		Store createdStore = storeRepository.save(store);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdStore.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}