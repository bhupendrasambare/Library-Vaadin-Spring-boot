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
public class Response {
    private Status status = Status.SUCCESS;
    private String errorCode = Constants.SUCCESS_CODE;
    private String message;
    private Object data;

    public Response(String message){
        this.message = message;
    }

    public Response(String code,String message){
        this.status = Status.FAIL;
        this.errorCode = code;
        this.message = message;
    }

    public Response(Exception e){
        this.status = Status.FAIL;
        this.errorCode = Constants.INTERNAL_SERVER_ERROR_CODE;
        this.message = Constants.INTERNAL_SERVER_ERROR;
    }
}
