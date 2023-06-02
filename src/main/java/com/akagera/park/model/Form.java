package com.akagera.park.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Form {
    @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String studentId;

    @Column
    private String StudentName;
    @Column
    private String Course;
    @Column
    private int Result;

}
