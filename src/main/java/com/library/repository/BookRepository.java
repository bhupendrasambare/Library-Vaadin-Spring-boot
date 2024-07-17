/**
 * author @bhupendrasambare
 * Date   :14/07/24
 * Time   :10:12 pm
 * Project:library
 **/
package com.library.repository;

import com.library.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Books,Integer> {

    @Query("Select u from Books u where u.student = null")
    List<Books> findWithoutStudent();

    @Query("Select u from Books u where u.name like %?1%")
    List<Books> findByName(String name);

    @Query("Select u from Books u where u.author like %?1%")
    List<Books> findByAuthor(String author);

    @Query("Select u.categoryName from Books u group by u.categoryName")
    List<String> findAllCategories();
}
