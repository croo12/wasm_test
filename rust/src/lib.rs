mod utils;

use wasm_bindgen::prelude::*;
// use wasm_bindgen_test::console_log;
use web_sys::console::*;

#[cfg(feature="wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    log_1(&wasm_bindgen::JsValue::from_str(&format!("Hello from Rust to {}", name)));
    // &format!("Hello from Rust to {}", name)
    //alert("Hello, rust!");
}

#[wasm_bindgen]
pub fn get_rust_data() -> String {
    "Some data is returned".into()
}