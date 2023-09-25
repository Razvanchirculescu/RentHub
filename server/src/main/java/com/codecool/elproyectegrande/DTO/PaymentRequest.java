package com.codecool.elproyectegrande.DTO;

import java.math.BigDecimal;

public class PaymentRequest {
    private BigDecimal amount;
    private Token token;


    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Token getToken() {
        return token;
    }


    public void setToken(Token token) {
        this.token = token;
    }

    public enum Currency {
        USD
    }

    public static class Token {
        private String id;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }
    }

}