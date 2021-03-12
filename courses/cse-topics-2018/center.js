/* center.js - Javascript script to center a document body.
 * Created	: Fri 01 Oct 2004 02:25:53 PM CDT
 * Modified	: Sun 17 Sep 2006 11:49:18 PM PDT
 * Description	: Sets the body width to 720 pixels and centers the body (if
 *		  the screen width is greater than 720). Otherwise sets a full
 *		  width.
 */

window.onresize = setBodyWidth;

setBodyWidth();

function setBodyWidth()
{
    var left = (window.innerWidth - 920) / 2 - 20;

    if (left > 0)
    {
	document.body.style.position	= "absolute";
	document.body.style.left	= left.toString() + 'px';
	document.body.style.width	= "920px";
    }
    
    else
    {
	document.body.style.position	= "";
	document.body.style.left	= "";
	document.body.style.width	= "";
    }
}
