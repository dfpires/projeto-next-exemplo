package br.com.unifacef.post.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.unifacef.post.model.Post;

//possui somente métodos
// vamos herdar métodos de uma outra interface
public interface PostRepository 
		extends JpaRepository<Post, Long>{
	
	// métodos CRUD
	// save
	// findAll
	// delete
}
