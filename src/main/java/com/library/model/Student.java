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
import org.checkerframework.common.aliasing.qual.Unique;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer studentCode;
    private String firstName;
    private String lastName;
    private String stream;
    private Integer issues;
    private String session;
}
