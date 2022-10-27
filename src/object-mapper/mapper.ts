import { ConstructorType } from "./constructor-type";
import { Mappable } from "./mappable";
import { MappableType } from "./mappable-type";
import { MapperFor } from "./mapper-for";

export class Mapper implements Mappable {
  map<TSource extends MappableType<TSource>, TDestination>(
    source: TSource,
    DestinationCtor: ConstructorType<TDestination>
  ): MapperFor<TSource, TDestination> { 
    return new MapperFor<TSource, TDestination>(source, DestinationCtor);
  }
}





// const y = mapper.map(source, Destination)
  // .for('propInSource', mapFrom: (source: Source) => TDestination<keyof TDestination>)