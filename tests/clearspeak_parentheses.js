// Copyright 2017 Volker Sorge
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//
// With support from the Mozilla Foundation under a MOSS grant.
//


goog.provide('sre.ClearspeakParentheses');

goog.require('sre.ClearspeakRuleTest');



/**
* @constructor
* @extends {sre.ClearspeakRuleTest}
*/
sre.ClearspeakParentheses = function() {
sre.ClearspeakParentheses.base(this, 'constructor');

/**
* @override
*/
this.information = 'ClearspeakParentheses rule tests.';

};
goog.inherits(sre.ClearspeakParentheses, sre.ClearspeakRuleTest);



//
// Parentheses
//


/**
 * Testing ClearspeakParentheses Example Paren001
 */
sre.ClearspeakParentheses.prototype.testParen001 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>25</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '25';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren002
 */
sre.ClearspeakParentheses.prototype.testParen002 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren003
 */
sre.ClearspeakParentheses.prototype.testParen003 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mn>2</mn><mo>+</mo><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2 plus negative 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren004
 */
sre.ClearspeakParentheses.prototype.testParen004 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mn>2</mn><mo>−</mo><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2 minus negative 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren005
 */
sre.ClearspeakParentheses.prototype.untestParen005 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mn>2</mn><mo>−</mo><msup><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow><mn>3</mn></msup></mrow></math>';
  var speech = '2 minus, open paren, negative 2, close paren, cubed';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren006
 */
sre.ClearspeakParentheses.prototype.untestParen006 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Open paren, 2x, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren007
 */
sre.ClearspeakParentheses.prototype.untestParen007 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></math>';
  var speech = 'Open paren, 2x, close paren, raised to the y plus1 power';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren008
 */
sre.ClearspeakParentheses.prototype.untestParen008 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Negative 2x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren009
 */
sre.ClearspeakParentheses.prototype.untestParen009 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Open paren negative 2x, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren010
 */
sre.ClearspeakParentheses.prototype.untestParen010 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mo>−</mo><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Negative, open paren, 2x, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren011
 */
sre.ClearspeakParentheses.prototype.untestParen011 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'One half';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren012
 */
sre.ClearspeakParentheses.prototype.untestParen012 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, Three fourths, x, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren013
 */
sre.ClearspeakParentheses.prototype.untestParen013 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mn>22</mn></mrow></mfrac></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, 11 over 22, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren014
 */
sre.ClearspeakParentheses.prototype.untestParen014 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mo>)</mo></mrow></mrow><mn>4</mn></msup></mrow></math>';
  var speech = 'One half to the fourth power';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren015
 */
sre.ClearspeakParentheses.prototype.untestParen015 = function() {
  var preference = 'Paren_Auto';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mn>15</mn></mrow></mfrac></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Open paren, 11 over 15, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren016
 */
sre.ClearspeakParentheses.prototype.untestParen016 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>25</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, 25, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren017
 */
sre.ClearspeakParentheses.prototype.untestParen017 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, 2x, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren018
 */
sre.ClearspeakParentheses.prototype.untestParen018 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mn>2</mn><mo>+</mo><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2 plus, open paren, negative 2, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren019
 */
sre.ClearspeakParentheses.prototype.untestParen019 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mn>2</mn><mo>−</mo><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2 minus, open paren, negative 2,close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren020
 */
sre.ClearspeakParentheses.prototype.untestParen020 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mn>2</mn><mo>−</mo><msup><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow><mn>3</mn></msup></mrow></math>';
  var speech = '2 minus, open paren, negative 2, close paren, cubed';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren021
 */
sre.ClearspeakParentheses.prototype.untestParen021 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Open paren, 2x, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren022
 */
sre.ClearspeakParentheses.prototype.untestParen022 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></math>';
  var speech = 'Open paren, 2x, close paren, raised to the y plus1 power';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren023
 */
sre.ClearspeakParentheses.prototype.untestParen023 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, Negative 2x, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren024
 */
sre.ClearspeakParentheses.prototype.untestParen024 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Open paren negative 2x, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren025
 */
sre.ClearspeakParentheses.prototype.untestParen025 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mo>−</mo><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Negative, open paren, 2x, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren026
 */
sre.ClearspeakParentheses.prototype.untestParen026 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, One half, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren027
 */
sre.ClearspeakParentheses.prototype.untestParen027 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, three fourths, x, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren028
 */
sre.ClearspeakParentheses.prototype.untestParen028 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mn>22</mn></mrow></mfrac></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Open paren, 11 over 22, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren029
 */
sre.ClearspeakParentheses.prototype.untestParen029 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mo>)</mo></mrow></mrow><mn>4</mn></msup></mrow></math>';
  var speech = 'Open paren, One half to the fourth power, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren030
 */
sre.ClearspeakParentheses.prototype.untestParen030 = function() {
  var preference = 'Paren_Speak';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mn>15</mn></mrow></mfrac></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Open paren, 11 over 15, close paren, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren031
 */
sre.ClearspeakParentheses.prototype.untestParen031 = function() {
  var preference = 'Paren_CoordPoint';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The point with coordinates 1 comma 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren032
 */
sre.ClearspeakParentheses.prototype.untestParen032 = function() {
  var preference = 'Paren_CoordPoint';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The point with coordinates x comma y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren033
 */
sre.ClearspeakParentheses.prototype.untestParen033 = function() {
  var preference = 'Paren_CoordPoint';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The point with coordinates 1 comma 2 comma 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren034
 */
sre.ClearspeakParentheses.prototype.untestParen034 = function() {
  var preference = 'Paren_CoordPoint';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The point with coordinates x comma y comma z';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren035
 */
sre.ClearspeakParentheses.prototype.untestParen035 = function() {
  var preference = 'Paren_CoordPoint';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>386</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The point with coordinates 1 comma 2 comma three hundred eighty six';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren036
 */
sre.ClearspeakParentheses.prototype.untestParen036 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>,</mo><mtext></mtext><mi>b</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from <em>a</em> to <em>b</em>, not including <em>a</em> or <em>b</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren037
 */
sre.ClearspeakParentheses.prototype.untestParen037 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>0</mn><mo>,</mo><mtext></mtext><mn>1</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from 0 to 1, not including 0 or 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren038
 */
sre.ClearspeakParentheses.prototype.untestParen038 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>[</mo><mrow><mi>a</mi><mo>,</mo><mtext></mtext><mi>b</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from <em>a</em> to <em>b</em>, including a, but not including <em>b</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren039
 */
sre.ClearspeakParentheses.prototype.untestParen039 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>[</mo><mrow><mn>0</mn><mo>,</mo><mtext></mtext><mn>1</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from 0 to 1, including 0, but not including 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren040
 */
sre.ClearspeakParentheses.prototype.untestParen040 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>,</mo><mtext></mtext><mi>b</mi></mrow><mo>]</mo></mrow></mrow></math>';
  var speech = 'The interval from <em>a</em> to <em>b</em>, not including a, but including <em>b</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren041
 */
sre.ClearspeakParentheses.prototype.untestParen041 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>0</mn><mo>,</mo><mtext></mtext><mn>1</mn></mrow><mo>]</mo></mrow></mrow></math>';
  var speech = 'The interval from 0 to 1, not including 0, but including 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren042
 */
sre.ClearspeakParentheses.prototype.untestParen042 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>[</mo><mrow><mi>a</mi><mo>,</mo><mtext></mtext><mi>b</mi></mrow><mo>]</mo></mrow></mrow></math>';
  var speech = 'The interval from <em>a</em> to <em>b</em>, including <em>a</em> and <em>b</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren043
 */
sre.ClearspeakParentheses.prototype.untestParen043 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>[</mo><mrow><mn>0</mn><mo>,</mo><mtext></mtext><mn>1</mn></mrow><mo>]</mo></mrow></mrow></math>';
  var speech = 'The interval from 0 to 1, including 0 and 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren044
 */
sre.ClearspeakParentheses.prototype.untestParen044 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mi>∞</mi><mo>,</mo><mtext></mtext><mi>b</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from negative infinity to <em>b</em>, not including <em>b</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren045
 */
sre.ClearspeakParentheses.prototype.untestParen045 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mi>∞</mi><mo>,</mo><mtext></mtext><mn>1</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from negative to 1, not including 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren046
 */
sre.ClearspeakParentheses.prototype.untestParen046 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mo stretchy="false">(</mo><mo>−</mo><mi>∞</mi><mo>,</mo><mi>b</mi><mo stretchy="false">]</mo></mrow></math>';
  var speech = 'The interval from negative infinity to <em>b</em>, including <em>b</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren047
 */
sre.ClearspeakParentheses.prototype.untestParen047 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mo stretchy="false">(</mo><mo>−</mo><mi>∞</mi><mo>,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow></math>';
  var speech = 'The interval from negative infinity to 1, including 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren048
 */
sre.ClearspeakParentheses.prototype.untestParen048 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>,</mo><mtext></mtext><mi>∞</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from <em>a</em> to infinity, not including <em>a</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren049
 */
sre.ClearspeakParentheses.prototype.untestParen049 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>1</mn><mo>,</mo><mtext></mtext><mi>∞</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from 1 to infinity, not including 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren050
 */
sre.ClearspeakParentheses.prototype.untestParen050 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mo stretchy="false">[</mo><mi>a</mi><mo>,</mo><mi>∞</mi><mo stretchy="false">)</mo></mrow></math>';
  var speech = 'The interval from <em>a</em> to infinity, including <em>a</em>';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren051
 */
sre.ClearspeakParentheses.prototype.untestParen051 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mo stretchy="false">[</mo><mn>1</mn><mo>,</mo><mi>∞</mi><mo stretchy="false">)</mo></mrow></math>';
  var speech = 'The interval from 1 to infinity, including 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren052
 */
sre.ClearspeakParentheses.prototype.untestParen052 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mi>∞</mi><mo>,</mo><mtext></mtext><mi>∞</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from negative infinity to infinity';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Paren053
 */
sre.ClearspeakParentheses.prototype.untestParen053 = function() {
  var preference = 'Paren_Interval';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mi>∞</mi><mo>,</mo><mtext></mtext><mo>+</mo><mi>∞</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'The interval from negative infinity to positive infinity';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest001
 */
sre.ClearspeakParentheses.prototype.untestNest001 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mi>f</mi><mrow><mo>(</mo><mrow><mi>g</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'f of, g of x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest002
 */
sre.ClearspeakParentheses.prototype.untestNest002 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mi>f</mi><mrow><mo>(</mo><mrow><mi>g</mi><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'f of, open paren, g of open paren, x plus 1, close paren, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest003
 */
sre.ClearspeakParentheses.prototype.untestNest003 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mn>6</mn><mo>−</mo><mrow><mo>[</mo><mrow><mn>2</mn><mo>−</mo><mrow><mo>(</mo><mrow><mn>3</mn><mo>+</mo><mn>5</mn></mrow><mo>)</mo></mrow></mrow><mo>]</mo></mrow></mrow></math>';
  var speech = '6 minus, open bracket, 2 minus, open paren, 3 plus 5, close paren, close bracket';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest004
 */
sre.ClearspeakParentheses.prototype.untestNest004 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mn>6</mn><mo>−</mo><mrow><mo>(</mo><mrow><mn>2</mn><mo>−</mo><mrow><mo>(</mo><mrow><mn>3</mn><mo>+</mo><mn>5</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '6 minus, open paren, 2 minus, open second paren, 3 plus 5, close second paren, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest005
 */
sre.ClearspeakParentheses.prototype.untestNest005 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mn>4</mn><mrow><mo>[</mo><mrow><mi>x</mi><mo>+</mo><mn>3</mn><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>)</mo></mrow></mrow><mo>]</mo></mrow></mrow></math>';
  var speech = '4 times open bracket x plus 3 times, open paren, 2 x plus 1, close paren, close bracket';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest006
 */
sre.ClearspeakParentheses.prototype.untestNest006 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mn>4</mn><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><mn>3</mn><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '4 times open paren, x plus 3 times, open second paren, 2 x plus 1, close second paren, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest007
 */
sre.ClearspeakParentheses.prototype.untestNest007 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mrow><mo>(</mo><mrow><mn>2</mn><mo>+</mo><mrow><mo>(</mo><mrow><mn>3</mn><mo>+</mo><mn>7</mn></mrow><mo>)</mo></mrow><mo>−</mo><mrow><mo>(</mo><mrow><mn>2</mn><mo>+</mo><mn>8</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '1 plus, open paren, 2 plus, open second paren, 3 plus 7, close second paren, minus, open second paren, 2 plus 8, close second paren, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest008
 */
sre.ClearspeakParentheses.prototype.untestNest008 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mrow><mo>(</mo><mrow><mn>2</mn><mo>+</mo><mrow><mo>(</mo><mrow><mn>3</mn><mo>−</mo><mrow><mo>(</mo><mrow><mn>4</mn><mo>−</mo><mn>5</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '1 plus, open paren, 2 plus, open second paren, 3 minus, open third paren, 4 minus 5, close third paren, close second paren, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example Nest009
 */
sre.ClearspeakParentheses.prototype.untestNest009 = function() {
  var preference = 'Paren_SpeakNestingLevel';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mo>+</mo><mrow><mo>(</mo><mrow><mn>3</mn><mo>+</mo><mn>4</mn></mrow><mo>)</mo></mrow><mo>+</mo><mn>5</mn></mrow><mo>)</mo></mrow><mo>+</mo><mn>6</mn><mo>+</mo><mrow><mo>(</mo><mrow><mrow><mo>(</mo><mrow><mn>7</mn><mo>+</mo><mrow><mo>(</mo><mrow><mn>8</mn><mo>+</mo><mn>1</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow><mo>+</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'open paren, open second paren, 2 plus, open third paren, 3 plus 4, close third paren, plus 5, close second paren, plus 6, plus open second paren, open third paren, 7 plus, open fourth paren, 8 plus 1, close fourth paren, close third paren, plus 2, close second paren, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen001
 */
sre.ClearspeakParentheses.prototype.untestSilParen001 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>25</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '25';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen002
 */
sre.ClearspeakParentheses.prototype.untestSilParen002 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen003
 */
sre.ClearspeakParentheses.prototype.untestSilParen003 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mn>2</mn><mo>+</mo><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2 plus negative 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen004
 */
sre.ClearspeakParentheses.prototype.untestSilParen004 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mn>2</mn><mo>−</mo><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '2 minus negative 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen005
 */
sre.ClearspeakParentheses.prototype.untestSilParen005 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mn>2</mn><mo>−</mo><msup><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn></mrow><mo>)</mo></mrow></mrow><mn>3</mn></msup></mrow></math>';
  var speech = '2 minus, negative 2, cubed';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen006
 */
sre.ClearspeakParentheses.prototype.untestSilParen006 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = '2x, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen007
 */
sre.ClearspeakParentheses.prototype.untestSilParen007 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></math>';
  var speech = '2x, raised to the y plus1 power';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen008
 */
sre.ClearspeakParentheses.prototype.untestSilParen008 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Negative 2x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen009
 */
sre.ClearspeakParentheses.prototype.untestSilParen009 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'negative 2x, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen010
 */
sre.ClearspeakParentheses.prototype.untestSilParen010 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mo>−</mo><msup><mrow><mrow><mo>(</mo><mrow><mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = 'Negative, 2x, squared';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen011
 */
sre.ClearspeakParentheses.prototype.untestSilParen011 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'One half';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen012
 */
sre.ClearspeakParentheses.prototype.untestSilParen012 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>x</mi></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = 'Three fourths, x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen013
 */
sre.ClearspeakParentheses.prototype.untestSilParen013 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><mrow><mo>(</mo><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mn>22</mn></mrow></mfrac></mrow><mo>)</mo></mrow></mrow></math>';
  var speech = '11 over 22';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen014
 */
sre.ClearspeakParentheses.prototype.untestSilParen014 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mo>)</mo></mrow></mrow><mn>4</mn></msup></mrow></math>';
  var speech = 'One half to the fourth power';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakParentheses Example SilParen015
 */
sre.ClearspeakParentheses.prototype.untestSilParen015 = function() {
  var preference = 'Paren_Silent';
  var mathml = '<math><mrow><msup><mrow><mrow><mo>(</mo><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mn>15</mn></mrow></mfrac></mrow><mo>)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>';
  var speech = '11 over 15, squared';
  this.executeRuleTest(mathml, speech, preference);
};
