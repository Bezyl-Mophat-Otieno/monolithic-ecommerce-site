CREATE TABLE customer
(
    id VARCHAR (255) PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
)


CREATE TABLE product (
    id VARCHAR (255) PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price DECIMAL(10,2),
    quantity INT
)

CREATE TABLE orders (
    id VARCHAR (255) PRIMARY KEY,
    customer_id VARCHAR(255),
    product_id VARCHAR(255),
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)





