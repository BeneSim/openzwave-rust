#[repr(C)]
#[derive(Debug, PartialEq, Clone, Copy)]
pub enum ValueGenre {
    Basic = 0,
    User,
    Config,
    System,
    Count,
}

#[repr(C)]
#[derive(Debug, PartialEq, Clone, Copy)]
pub enum ValueType {
    Bool = 0,
    Byte,
    Decimal,
    Int,
    List,
    Schedule,
    Short,
    String,
    Button,
    Raw,
    //ValueType_Max = ValueType_Raw // likely useless in Rust wrapper
}

use std::fmt;
impl fmt::Display for ValueType {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.pad(&format!("{:?}", self))
    }
}

// IMPORTANT: This ValueID struct MUST match the layout of the OpenZWave
//            ValueID class.
#[derive(Copy, Clone)]
#[repr(C)]
pub struct ValueID {
    pub id: u32,
    pub id1: u32,
    pub home_id: u32,
}

extern "C" {
    pub fn value_id_from_packed_id(home_id: u32, id: u64) -> ValueID;
    pub fn value_id_from_values(
        home_id: u32,
        node_id: u8,
        genre: ValueGenre,
        command_class_id: u8,
        instance: u8,
        value_index: u8,
        value_type: ValueType,
    ) -> ValueID;

    pub fn value_id_get_home_id(value: *const ValueID) -> u32;
    pub fn value_id_get_node_id(value: *const ValueID) -> u8;
    pub fn value_id_get_genre(value: *const ValueID) -> ValueGenre;
    pub fn value_id_get_command_class_id(value: *const ValueID) -> u8;
    pub fn value_id_get_instance(value: *const ValueID) -> u8;
    pub fn value_id_get_index(value: *const ValueID) -> u8;
    pub fn value_id_get_type(value: *const ValueID) -> ValueType;
    pub fn value_id_get_id(value: *const ValueID) -> u64;

    // Comparison Operators
    pub fn value_id_eq(myself: *const ValueID, other: *const ValueID) -> bool;
    pub fn value_id_less_than(myself: *const ValueID, other: *const ValueID) -> bool;
}