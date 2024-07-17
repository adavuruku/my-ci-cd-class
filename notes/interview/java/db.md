Normalization is a process in database design that organizes tables to minimize redundancy and dependency. It divides larger tables into smaller tables and links them using relationships. Here are the levels of normalization (normal forms):

### First Normal Form (1NF)

A table is in 1NF if:
- It contains only atomic (indivisible) values.
- Each column contains values of a single type.
- Each column has a unique name.
- The order in which data is stored does not matter.

**Example**:
| OrderID | ProductID | ProductName | Quantity |
|---------|------------|-------------|----------|
| 1       | 101        | Apple       | 10       |
| 1       | 102        | Orange      | 20       |
| 2       | 101        | Apple       | 15       |

### Second Normal Form (2NF)

A table is in 2NF if:
- It is in 1NF.
- All non-key attributes are fully functional dependent on the primary key.

This means removing partial dependencies. If a table has a composite primary key, no non-key attribute should depend on a part of the primary key.

**Example**:
1NF Table:
| OrderID | ProductID | ProductName | Quantity | Supplier |
|---------|------------|-------------|----------|----------|
| 1       | 101        | Apple       | 10       | SupplierA|
| 1       | 102        | Orange      | 20       | SupplierB|
| 2       | 101        | Apple       | 15       | SupplierA|

2NF Tables:
Orders Table:
| OrderID | Supplier   |
|---------|------------|
| 1       | SupplierA  |
| 1       | SupplierB  |
| 2       | SupplierA  |

OrderDetails Table:
| OrderID | ProductID | Quantity |
|---------|------------|----------|
| 1       | 101        | 10       |
| 1       | 102        | 20       |
| 2       | 101        | 15       |

Products Table:
| ProductID | ProductName |
|-----------|-------------|
| 101       | Apple       |
| 102       | Orange      |

### Third Normal Form (3NF)

A table is in 3NF if:
- It is in 2NF.
- All the attributes are functionally dependent only on the primary key.

This means removing transitive dependencies. Non-key attributes should not depend on other non-key attributes.

**Example**:
2NF Table:
| OrderID | ProductID | Quantity | SupplierID | SupplierName |
|---------|------------|----------|------------|--------------|
| 1       | 101        | 10       | 1          | SupplierA    |
| 1       | 102        | 20       | 2          | SupplierB    |
| 2       | 101        | 15       | 1          | SupplierA    |

3NF Tables:
Orders Table:
| OrderID | SupplierID |
|---------|------------|
| 1       | 1          |
| 1       | 2          |
| 2       | 1          |

OrderDetails Table:
| OrderID | ProductID | Quantity |
|---------|------------|----------|
| 1       | 101        | 10       |
| 1       | 102        | 20       |
| 2       | 101        | 15       |

Products Table:
| ProductID | ProductName |
|-----------|-------------|
| 101       | Apple       |
| 102       | Orange      |

Suppliers Table:
| SupplierID | SupplierName |
|------------|--------------|
| 1          | SupplierA    |
| 2          | SupplierB    |

### Boyce-Codd Normal Form (BCNF)

A table is in BCNF if:
- It is in 3NF.
- Every determinant is a candidate key.

**Example**:
3NF Table:
| OrderID | ProductID | Quantity | SupplierID |
|---------|------------|----------|------------|
| 1       | 101        | 10       | 1          |
| 1       | 102        | 20       | 2          |
| 2       | 101        | 15       | 1          |

If `ProductID` also uniquely determines `SupplierID`, you need to create separate tables to adhere to BCNF.

Products Table:
| ProductID | SupplierID |
|-----------|------------|
| 101       | 1          |
| 102       | 2          |

Orders Table:
| OrderID | ProductID | Quantity |
|---------|------------|----------|
| 1       | 101        | 10       |
| 1       | 102        | 20       |
| 2       | 101        | 15       |

### Fourth Normal Form (4NF)

A table is in 4NF if:
- It is in BCNF.
- It has no multi-valued dependencies.

**Example**:
3NF Table:
| ProductID | SupplierID | Location   |
|-----------|------------|------------|
| 101       | 1          | LocationA  |
| 101       | 1          | LocationB  |
| 102       | 2          | LocationA  |

Separate into:
Products Table:
| ProductID | SupplierID |
|-----------|------------|
| 101       | 1          |
| 102       | 2          |

ProductLocations Table:
| ProductID | Location   |
|-----------|------------|
| 101       | LocationA  |
| 101       | LocationB  |
| 102       | LocationA  |

### Fifth Normal Form (5NF)

A table is in 5NF if:
- It is in 4NF.
- It has no join dependencies.

5NF deals with reconstructing the original table without losing information, which might involve complex join dependencies.

**Example**:
Not practical for simple examples but applies to cases where tables need to be decomposed to avoid redundancy without losing data integrity.

### Summary

Each normalization level aims to reduce redundancy, improve data integrity, and ensure efficient data manipulation. However, higher normal forms can make database design more complex and sometimes impact performance, so practical considerations should guide the normalization level in use.