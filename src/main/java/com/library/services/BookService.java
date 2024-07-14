/**
 * author @bhupendrasambare
 * Date   :14/07/24
 * Time   :10:12 pm
 * Project:library
 **/
package com.library.services;

import com.library.dto.Constants;
import com.library.dto.Response;
import com.library.model.Books;
import com.library.repository.BookRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@BrowserCallable
@AnonymousAllowed
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Response saveBook(Books request){
        Response response = new Response();
        Books books = new Books();
        books.setCreatedDate(LocalDateTime.now());
        if(request.getId()!=null && request.getId()!=0){
            books = bookRepository.findById(request.getId()).orElse(null);
        }else{request.setId(null);}
        if(books!=null){
            boolean invalid= false;
            if(request.getName()!=null && !request.getName().isEmpty()){
                books.setName(request.getName());
            }else{invalid=true;}
            if(request.getAuthor()!=null && !request.getAuthor().isEmpty()){
                books.setAuthor(request.getAuthor());
            }else{invalid=true;}
            if(request.getCategoryName()!=null && !request.getCategoryName().isEmpty()){
                books.setCategoryName(request.getCategoryName());
            }else{invalid=true;}
            if(request.getYear()!=null && request.getYear()!=0){
                books.setYear(request.getYear());
            }else{invalid=true;}
            if(invalid && request.getId()==null){
                response = new Response(Constants.INVALID_REQUEST_CODE,Constants.INVALID_REQUEST);
            }else {
                Books data = bookRepository.save(books);
                response.setData(data);
            }
        }else{
            response = new Response(Constants.BOOK_NOT_FOUND_CODE,Constants.BOOK_NOT_FOUND);
        }
        return response;
    }

    public List<Books> findAll(){
        return bookRepository.findAll();
    }

    public Books findById(Integer id){
        return bookRepository.findById(id).orElse(null);
    }

    public List<Books> findFreeBooks(){
        return bookRepository.findWithoutStudent();
    }

    public List<Books> findByName(String name){
        return bookRepository.findByName(name);
    }

    public List<Books> findByAuthor(String author){
        return bookRepository.findByAuthor(author);
    }

}
