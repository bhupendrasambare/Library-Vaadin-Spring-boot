/**
 * author @bhupendrasambare
 * Date   :14/07/24
 * Time   :12:29 am
 * Project:todo
 **/
package com.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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

    @Column(unique = true)
    @JsonIgnore
    private Integer studentCode;

    private String firstName;
    private String lastName;
    private String stream;
    @JsonIgnore
    private Integer issues;
    private String session;
    @NotNull
    private Gender gender;
    public enum Gender {
        FEMALE, MALE
    }
}
