class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)
  /**
   * constructor()
   *
   * @property 'count' : number of stored items in hash table
   * @property 'capacity': nymber of buckets in hash table
   */
  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity);

    for (let i = 0; i < this.capacity; i++) {
      this.data[i] = null;
    }
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  /**
   * insert()
   *
   * 1) Resizes if 'loadFactor' exceeds 0.7
   *    - load factor is num of 'KeyValuePairs' divided by number of buckets ('capacity')
   *
   * 2) a) 'Normal Inserts' (The most common case) - Adds a 'KeyValuePair' to its table of 'data' if the key isn't anywhere in array yet
   *    b) Handles Collisions - If bucket is already occupied, adds keyValue pair to linked list
   *    c) Handles Reassignments - to already inserted KeyValuePair - If keys equals existing key , overwrites old value
   *
   * Note: the same code handles both cases (b) & (c) above because all all values are initialized at null
   * & all keyValuePairs have their 'next' property initialized as null
   */
  insert(key, value) {
    // Handle Resizing
    let loadFactor = this.count / this.capacity;
    if (loadFactor > 0.7) {
      this.resize();
    }

    let hash = this.hashMod(key);
    let curr = this.data[hash];

    // Handle Reassignments
    while (curr) {
      if (curr.key === key) {
        curr.value = value;
        return;
      }
      curr = curr.next;
    }

    // Handle Collisions AND 'Normal Inserts'
    let newNode = new KeyValuePair(key, value);
    newNode.next = this.data[hash];
    this.data[hash] = newNode;
    this.count++;
  }

  /**
   * read()
   *
   * Must handle the following scenarios:
   * @returns 'KeyValuePair' associated with passed in key, if it was addded directly to this.data
   * @returns 'KeyValuePair' associated with passed in key, if it was added via a collision (linked list)
   * @returns 'undefined' if it can't find passed in key
   */
  read(key) {
    let hash = this.hashMod(key);
    let curr = this.data[hash];

    while (curr) {
      if (curr.key === key) {
        return curr.value;
      }
      curr = curr.next;
    }

    return undefined;
  }

  /**
   * resize()
   *
   * Must:
   * 1) copy @property 'data'
   * 2) double @property 'capacity'
   * 3) assign @property 'data' to new Array scaling to new @property 'capacity'
   * 4) redistribute elements from copy to new data, check for nodes nested in linked lists
   *    - don't use Array methods like spread & concat (since they're linked lists not arrays)
   */
  resize() {
    let oldData = this.data;
    let oldCount = this.count;

    this.capacity *= 2;
    this.data = new Array(this.capacity);
    this.count = 0;

    if (oldCount > 0) {
      oldData.forEach(pair => {
        if (pair) {
          // add current pair
          this.insert(pair.key, pair.value);

          // add all nodes in linked list of current pair
          let curr = pair.next;

          while (curr) {
            this.insert(curr.key, curr.value);
            curr = curr.next;
          }
        }
      });
    }
  }

  /**
   * delete()
   *
   * 1) removes 'KeyValuePair' from this.data
   * 2) If the 'next' property of the deleted 'KeyValuePair' is not null,
   *    it reconnects the links of the previous & subsequent nodes
   * 3) Returns an error message if the 'key' argument is not found
   */
  delete(key) {
    let hash = this.hashMod(key);
    let curr = this.data[hash];

    if (!curr) {
      return 'Key not found';
    }

    // Handle Reassignments
    this.count--;

    // If the head's key matches
    if (curr.key === key) {
      this.data[hash] = null;
      return;
    }

    // otherwise, search through all other nodes
    curr = curr.next;

    while (curr) {
      if (curr.key === key) {
        // Handle relinking disconnected nodes
        if (curr.next) {
          curr.key = curr.next.key;
          curr.value = curr.next.value;
          return;
          // else, just set to null
        } else {
          curr = null;
          return;
        }
      }
      curr = curr.next;
    }
  }

}


module.exports = HashTable;
