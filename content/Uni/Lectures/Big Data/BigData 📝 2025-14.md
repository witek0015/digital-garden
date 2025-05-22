---
Subject: BigData
Date: 2025-03
Tags: [BigData]
---
# Summary:

## Lab notes:

## Lecture notes:
- **What is BigData?**
	- Computations that require several machines and compute requests in considerable amount of time.
	- There is no size boundary for a Big Data calculations.
	- Big data requires to work on several machines.
- **History of Big Data**
	- 90's - increased usage of websites
	- 2003 - Google File System
	- 2004 - MapReduce algorithm - algorithm for processing large computer clusters
	- 2005 - Doug Cutting starts working on Hadoop
	- 2008 - Apache Hadoop is in production
	- 2010 - Major tech companies introduce low-cost databases and cloud computing power
	- 2015 - Big data becomes open to public, more and more big data and data science solutions are being developed
	- 2020+ - more advanced AI and machine learning algorithms step in.
- **Properties of Big Data - 3 V's**
	- **Volume** - *size* of the data
	- **Variety** - *structures* of data (Table, Database, Photo/Web/Audio, Social/Mobile/Unstructured)
	- **Velocity** - *time-frame* of data processing & storing (Batch, Periodic, Near real-time, Real-time)
	- **Veracity** - overall *quality* of data (authenticity/truthfullness)
	- **Value** - *worth* of data in terms of science/social/analytic (storing is cheap, computing is expansive)
- **Examples of use of Big Data**:
	- Financial sector:
		- *Banks and their customers*
		- *Insurance companies*
		- *Stock market*
	- Public health:
		- *Disease surveillance*
		- *Electronic Health Records*
	- Social media
		- *Social listening*
- There is a lot of tool and solutions for big data.
	- We are focusing on **Apache Hadoop**, which is a framework that allows for the distributed processing of large datasets across cluster of computers. Designed to scale up.
- **Hadoop Ecosystem**:
	- **file system**
	- **YARN** (yet another resource negotiator) - resource management
	- **MapReduce** - software for easily writing applications which process vast amounts of data
	- **Spark** - open-source parallel processing framework that supports in memory processing to boost performance (faster due to use GPU)
	- **Hadoop Common** - tools and libraries to menage clusters, configure HDFS
- DFS is a **distributed file system** - splitting the file into smaller chunks and parallel computing what we need
- **Why HDFS?**
	- Cost effective
	- High scalability - scale up or scale down nodes as per our requirement
	- Data diversity - store various data types
	- High availability and fault tolerance
	- High throughput - can perform a lot of work at once due to parallel processing
- **How is data stored in HDFS?**
	- NameNode (Master) - guides the Datanode NameNode is used for storing the metadate (data about the data). Meta data can be the transaction logs that keep track of the user's activity
	- DataNode (Slave) - mainly utilized to store and create data
	- Data is split into smaller blocks (default 128 MB) and then does parallel processing on these. The data is put into data nodes such as there are always 3 instances of data.
- **MapReduce**
	- First introduced by Google in 2004
	- Used to process very large amounts of data
	- Allows for distributed and fault-tolerant data processing
	- Works in 2 or 3 steps: map, combine, reduce.
	- Examples:
		- Google Search
		- Image Processing - analyzing satellite images
		- Genome Sequencing - analyzing to identify mutations
		- GPT model
- **Steps in MapReduce**:
	- **Map** - input is divided in smaller chunks and processed in parallel across multiple machines. Each machine applies a map function to the input data, which generates a set of key-value pairs
	- **Combine** - optional intermediate step. reduces the amount of data that needs to be transferren from map tasks to reduce tasks. Combiner function is applied to the output of the map tasks before it is sent to reducing
	- **Reduce** - key-value pairs are combined and processed to produce a final output. The recue function applies an operation to each key-value pair with the same key, which generates a set of output values. These output values are combined to produce the final output.
- 