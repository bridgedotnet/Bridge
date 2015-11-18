// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix

namespace Bridge.Html5
{
    /// <summary>
    /// Many of SVG's graphics operations utilize 2x3 matrices which can be expanded into a 3x3 matrix
    /// for the purposes of matrix arithmetic.
    /// An SVGMatrix object can be designated as read only, which means that attempts to modify the
    /// object will result in an exception being thrown.
    /// </summary>
    [External]
    [Namespace(false)]
    public class SVGMatrix
    {
        /// <summary>
        /// SVGMatrix component.
        /// </summary>
        public readonly float a, b, c, d, e, f;

        /// <summary>
        /// Performs matrix multiplication. This matrix is post-multiplied by another matrix, returning
        /// the resulting new matrix.
        /// </summary>
        public virtual SVGMatrix Multiply(SVGMatrix secondMatrix)
        {
            return null;
        }

        /// <summary>
        /// Return the inverse matrix
        /// A DOMException with code SVG_MATRIX_NOT_INVERTABLE is raised if the matrix is not invertable.
        /// </summary>
        /// <returns></returns>
        /// //
        public virtual SVGMatrix Inverse()
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a translation transformation on the current matrix and returns the resulting matrix.
        /// </summary>
        /// <param name="x"></param>
        /// <param name="y"></param>
        /// <returns></returns>
        public virtual SVGMatrix Translate(float x, float y)
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a uniform scale transformation on the current matrix and returns the resulting matrix.
        /// </summary>
        /// <param name="scaleFactor"></param>
        /// <returns></returns>
        public virtual SVGMatrix Scale(float scaleFactor)
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a non-uniform scale transformation on the current matrix and returns the resulting matrix.
        /// </summary>
        /// <param name="scaleFactorX"></param>
        /// <param name="scaleFactorY"></param>
        /// <returns></returns>
        public virtual SVGMatrix ScaleNonUniform(float scaleFactorX, float scaleFactorY)
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a rotation transformation on the current matrix and returns the resulting matrix.
        /// (angle is measures in degrees.)
        /// </summary>
        /// <param name="angle"></param>
        /// <returns></returns>
        public virtual SVGMatrix Rotate(float angle)
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a rotation transformation on the current matrix and returns the resulting matrix.
        /// The rotation angle is determined by taking (+/-) atan(y/x). The direction of the vector (x, y)
        /// determines whether the positive or negative angle value is used.
        /// A DOMException with code SVG_INVALID_VALUE_ERR is raised if one of the parameters has an invalid value.
        /// </summary>
        /// <param name="x"></param>
        /// <param name="y"></param>
        /// <returns></returns>
        public virtual SVGMatrix RotateFromVector(float x, float y)
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies the transformation [-1 0 0 1 0 0] and returns the resulting matrix.
        /// </summary>
        /// <returns></returns>
        public virtual SVGMatrix FlipX()
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies the transformation [1 0 0 -1 0 0] and returns the resulting matrix.
        /// </summary>
        /// <returns></returns>
        public virtual SVGMatrix FlipY()
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a skewX transformation on the current matrix and returns the resulting matrix.
        /// </summary>
        /// <param name="angle"></param>
        /// <returns></returns>
        public virtual SVGMatrix SkewX(float angle)
        {
            return null;
        }

        /// <summary>
        /// Post-multiplies a skewY transformation on the current matrix and returns the resulting matrix.
        /// </summary>
        /// <param name="angle"></param>
        /// <returns></returns>
        public virtual SVGMatrix SkewY(float angle)
        {
            return null;
        }
    }
}
