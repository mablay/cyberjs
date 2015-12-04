# Data structure

System

* id: string
* name: string
* description: string
* parameters: Map<parameterId:string, parameter: Parameter>
* relations: Map<relationId: string, relation: Relation>

Parameter

* id: string
* name: string
* description: string
* defaultValue: number
* min: number
* max: number

Relation

* id: string
* name: string
* description: string
* domainId: string (Ref:Parameter)
* coDomainId: string (Ref:Parameter)
* data: array<number>

Instance

* ownerId: string (Ref:User)
* history: array<State>

State

* systemParamRef
* systemParamVal
* System (deep copy)
