maven-search-js
===============

Simple Node.js script for searching maven artifacts in central repository.
Works by quering http://search.maven.org and parsing json results. It works unless the site is down or requests URLs or output format have changed.

Usage
=====

    $ node maven-search.js [<group>] <artifact>

Example
=======

Search by artifact name (shows only last version):

    $ node maven-search.js commons-lang

    Name                                                          Release Date
    ====                                                          ============
    commons-lang:commons-lang:20030203.000129                     Wednesday, November 09, 2005
    net.dongliu.commons:commons-lang:1.0.7                        Tuesday, September 23, 2014
    net.sf.staccatocommons:commons-lang:1.2                       Monday, January 02, 2012
    org.kie.modules:org-apache-commons-lang3:6.2.0.Beta3          Sunday, September 28, 2014
    org.mod4j.org.apache.commons:lang:2.1.0                       Friday, August 14, 2009
    com.cedarsoft.commons:lang:6.0.2                              Friday, October 03, 2014
    org.kie.modules:org-apache-commons-lang-main:6.2.0.Beta3      Sunday, September 28, 2014
    org.apache.karaf.demos.deployer.wrap:osgi.commons-lang:2.4.0  Wednesday, September 17, 2014
    net.bramp.jackson:jackson-datatype-commons-lang3:0.1          Wednesday, June 18, 2014
    org.apache.commons:commons-lang3:3.3.2                        Sunday, April 06, 2014
    org.jvnet.jaxb2_commons:jaxb2-commons-lang:2.4                Sunday, March 16, 2014
    com.btmatthews.jaxb2_commons:jaxb2-commons-lang3:1.0.0        Saturday, September 21, 2013
    com.mysema.commons:mysema-commons-lang:0.2.4                  Tuesday, September 11, 2012
    org.apache.servicemix.bundles:org.apache.servicemix.bundles.c Monday, January 30, 2012
    org.apache.directory.studio:org.apache.commons.lang:2.6       Wednesday, January 11, 2012
    org.andromda.thirdparty.jaxb2_commons:commons-lang-plugin:2.2 Friday, April 30, 2010
    org.apache.karaf.eik.plugins:org.apache.commons.lang:2.6      Thursday, January 03, 2013
  
Search exact group:artifact (shows available versions, sorted by date)

    $ node maven-search.js commons-lang commons-lang
    
    Name                                                          Release Date
    ====                                                          ============
    commons-lang:commons-lang:2.6                                 Monday, January 17, 2011
    commons-lang:commons-lang:2.5                                 Thursday, February 25, 2010
    commons-lang:commons-lang:2.4                                 Wednesday, March 19, 2008
    commons-lang:commons-lang:2.3                                 Tuesday, February 13, 2007
    commons-lang:commons-lang:2.2                                 Saturday, October 07, 2006
    commons-lang:commons-lang:2.1                                 Thursday, November 24, 2005
    commons-lang:commons-lang:2.0                                 Thursday, November 24, 2005
    commons-lang:commons-lang:1.0.1                               Thursday, November 24, 2005
    commons-lang:commons-lang:1.0                                 Thursday, November 24, 2005
    commons-lang:commons-lang:20030203.000129                     Wednesday, November 09, 2005
    commons-lang:commons-lang:1.0-b1.1                            Wednesday, November 09, 2005
    commons-lang:commons-lang:1.0-b1                              Wednesday, November 09, 2005
