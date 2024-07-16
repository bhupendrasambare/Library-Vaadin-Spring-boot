/**
 * author @bhupendrasambare
 * Date   :14/07/24
 * Time   :10:14 pm
 * Project:library
 **/
package com.library.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Response<T> {
    private T data;
    private String message = Constants.SUCCESS;
    private String code = Constants.SUCCESS_CODE;
    private boolean success;
}
