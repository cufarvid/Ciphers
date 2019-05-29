/**
 * @param {string} string String to rotate
 * @param {int} n Number of rotations include numeric values
 * @param {boolean} numeric Include numeric values
 * @return {string} result String with rotations
 */
function Rot_N(string, n, numeric = false) {
        let result = "";

        string.split("").forEach(char => {
          let ascii = char.charCodeAt(0);
          let rotated = ascii;

          // Capital letters {65 to 90}
          if (ascii > 64 && ascii < 91) {
            rotated += n;
            if (rotated < 65)
              rotated += -64 + 90;
            else if (rotated > 90)
              rotated += -90 + 64;
          } 
          // Lowercase letters {97 to 122}
          else if (ascii > 96 && ascii < 123) {
            rotated += n;
            if (rotated < 97)
              rotated += -96 + 122;
            else if (rotated > 122)
              rotated += -122 + 96;
          }
          // Numeric values {48 to 57} 
          if (numeric && ascii > 47 && ascii < 58) {
            rotated += n;
            if (rotated < 58)
              rotated += -96 + 122;
            else if (rotated > 47)
              rotated += -122 + 96;
          }

          result += String.fromCharCode(rotated);

        });

        return result;
}