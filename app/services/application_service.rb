# https://webuild.envato.com/blog/a-case-for-use-cases/

class ApplicationService
  def self.call(...)
    new(...).call
  end

  def call
    raise NotImplementedError
  end
end
