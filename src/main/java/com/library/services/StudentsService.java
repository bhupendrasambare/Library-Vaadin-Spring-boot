/**
 * author @bhupendrasambare
 * Date   :16/07/24
 * Time   :11:26 pm
 * Project:library
 **/
package com.library.services;
import com.library.model.Student;
import com.library.repository.StudentsRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class StudentsService extends CrudRepositoryService<Student, Integer, StudentsRepository> {
}
