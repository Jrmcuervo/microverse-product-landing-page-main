function catAndMouse(x, y, z) {
    let distanceCatA, distanceCatB;
    if (x > z) distanceCatA = x - z;
    else if (x <= z) distanceCatA = z - x;

    if (y > z) distanceCatB = y - z;
    else if (y <= z) distanceCatB = z - y;

    if (distanceCatA < distanceCatB) return "Cat A";
    if (distanceCatB < distanceCatA) return "Cat B";
    return "Mouse C";
}
catAndMouse(2, 5, 4);
