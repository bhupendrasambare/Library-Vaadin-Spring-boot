/**
 * author @bhupendrasambare
 * Date   :14/07/24
 * Time   :12:29 am
 * Project:todo
 **/
package com.library.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String author;
    private String image;

    @Column(name = "category_name")
    private String category_name;
    private Integer year;

    @Column(name = "issue_date")
    private LocalDateTime issueDate;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

}
