//Encapsulation & Data Processing
class DataProcessor {
    #records = [];
  
    addRecord(record) {
      this.#records.push(record);
    }
  
    getAllRecords() {
      return [...this.#records];
    }
  
    filterRecordsBy(predicate) {
      return this.#records.filter(predicate);
    }
  }
  
  // Example Usage:
  const processor = new DataProcessor();
  processor.addRecord({ name: "Alice", age: 30 });
  processor.addRecord({ name: "Bob", age: 25 });
  
  const allRecords = processor.getAllRecords();
  console.log(allRecords);  // Expected: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]
  
  const filtered = processor.filterRecordsBy(record => record.age > 26);
  console.log(filtered);    // Expected: [{ name: "Alice", age: 30 }]
  
  