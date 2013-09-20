(function() {

    var Noise = function( width, height, depth ) {
        this.width = width;
        this.height = height;
        this.depth = depth;

        this.randomize();
    };

    //
    Noise.prototype = Object.create( Object.prototype );

    //
    Noise.prototype.sample = function( x, y, z ) {

        // repeat
        x %= this.width - 1;
        y %= this.height - 1;
        z %= this.depth - 1;

        // flip negatives
        ( x < 0 ) && ( x = this.width + x );
        ( y < 0 ) && ( y = this.width + y );
        ( z < 0 ) && ( z = this.width + z );

        // sampling points
        var x0 = Math.floor( x ),
            x1 = Math.ceil( x ),
            xd = x - x0,
            y0 = Math.floor( y ),
            y1 = Math.ceil( y ),
            yd = y - y0,
            z0 = Math.floor( z ),
            z1 = Math.ceil( z ),
            zd = z - z0;

        // linearily interpolate between the points: p0 + d
        console.log( x0 );
        var data = this.data,

            // x0, y0
            p000 = data[ x0 ][ y0 ][ z0 ],
            p001 = data[ x0 ][ y0 ][ z1 ],
            p00  = p000 + zd * ( p001 - p000 ),

            // x0, y1
            p010 = data[ x0 ][ y1 ][ z0 ],
            p011 = data[ x0 ][ y1 ][ z1 ],
            p01  = p010 + zd * ( p011 - p010 ),

            // x1, y0
            p100 = data[ x1 ][ y0 ][ z0 ],
            p101 = data[ x1 ][ y0 ][ z1 ],
            p10  = p100 + zd * ( p101 - p100 ),

            // x1, y1
            p110 = data[ x1 ][ y1 ][ z0 ],
            p111 = data[ x1 ][ y1 ][ z1 ],
            p11  = p110 + zd * ( p111 - p110 ),

            // x0 & x1
            p0 = p00 + yd * ( p01 - p00 ),
            p1 = p10 + yd * ( p11 - p10 ),

            // final
            p = p0 + xd * ( p1 - p0 );

        return p;

    };

    // 
    Noise.prototype.randomize = function() {
        this.data = [];
        for ( var x = 0 ; x < this.width ; x += 1 ) {
            this.data[ x ] = [];
            for ( var y = 0 ; y < this.height ; y += 1 ) {
                this.data[ x ][ y ] = [];
                for ( var z = 0 ; z < this.depth ; z += 1 ) {
                    this.data[ x ][ y ][ z ] = Math.random();
                }
            }
        }
    };

    window.Noise = Noise;

}());